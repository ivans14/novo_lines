import * as React from "react";
import GetList from "./MyComp/getList";
import Panels from "./MyComp/panels";

interface Tableprops {
  props: any;
}

function Table({ props }: Tableprops) {
  return (
    <div>
      <Panels></Panels>
    </div>
  );
}

export default Table;
