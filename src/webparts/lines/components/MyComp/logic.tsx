import * as React from "react";
import pnp, { Item } from "sp-pnp-js";
import { ListSP } from "./getList";

export default function Logic() {
  async function getItems(): Promise<any> {
    return await pnp.sp.web.lists
      .getByTitle("test")
      .items.select("Title", "created0", "fejlbeskrivelse")
      .orderBy("created0", false)
      .top(5)
      .get()
      .then((items: ListSP[]) => {
        items.forEach((item) => {});
      });
  }
  return true;
}
