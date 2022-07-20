import pnp, { Item } from "sp-pnp-js";
import * as React from "react";
import { forEach } from "lodash";
import "../styles/panels.css";

export interface ListSP {
  Title: string;
  createdby: string;
  fejlbeskrivelse: string;
  // created: string;
}
let titles = "";
let html = `<table>`;

function GetList() {
  const [inner_html, sethtml] = React.useState("");

  async function getItems(): Promise<any> {
    return await pnp.sp.web.lists
      .getByTitle("test")
      .items.select("Title", "created0", "fejlbeskrivelse")
      .orderBy("created0", false)
      .top(5)
      .get()
      .then((items: ListSP[]) => {
        items.forEach((item) => {
          titles += item.Title;
          html += `
          <tr>             
              <td>${item.Title}</td>  
              <td>${item.fejlbeskrivelse}</td>  
          </tr>
              `;
        });
        html += `</table>`;
        sethtml(html);
        html = `<table>`;
      });
  }
  React.useEffect(() => {
    getItems();
    const intervalId = setInterval(() => {
      getItems();

      return () => clearInterval(intervalId);
    }, 10000);
  }, []);

  return (
    <div className="text" dangerouslySetInnerHTML={{ __html: inner_html }} />
  );
}

export default GetList;
