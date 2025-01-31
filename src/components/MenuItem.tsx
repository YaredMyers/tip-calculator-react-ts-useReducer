import { Dispatch } from "react";

import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/orderReducer.ts";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className={
        "border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
      }
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className={"font-black"}>${item.price}</p>
    </button>
  );
};

export default MenuItem;
