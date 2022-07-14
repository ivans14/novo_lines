import * as React from "react";
import GetList from "./MyComp/getList";

interface Tableprops {
  props: any;
}

function Table({ props }: Tableprops) {
  return (
    <div>
      <GetList></GetList>
    </div>
  );
}

export default Table;
