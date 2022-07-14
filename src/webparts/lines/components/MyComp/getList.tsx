import pnp, { Item } from "sp-pnp-js";
import * as React from "react";
import { forEach } from "lodash";

interface ListSP {
  Title: string;
  createdby: string;
  created0: string;
  // created: string;
}

function GetList() {
  const [inner_html, sethtml] = React.useState("");
  let titles = "";
  let html = `<table>`;
  const getItems = (): Promise<any> => {
    return pnp.sp.web.lists
      .getByTitle("test")
      .items.select("Title", "created0", "createdby")
      .orderBy("created0", false)
      .top(5)
      .get()
      .then((items: ListSP[]) => {
        items.forEach((item) => {
          titles += item.Title;
          console.log(new Date(item.created0));

          html += `
          <tr>             
              <td>${item.Title}</td>  
              <td>${item.created0}</td>  
              <td>${item.createdby}</td>  


          </tr>
              `;
        });
        html += `</table>`;
        sethtml(html);
      });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  console.log("render", html);

  return <div dangerouslySetInnerHTML={{ __html: inner_html }} />;
}

export default GetList;
