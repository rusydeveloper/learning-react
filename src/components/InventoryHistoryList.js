import React, { useEffect } from "react";

import InventoryHistoryItem from "./InventoryHistoryItem";

function InventoryHistoryList(props) {
  useEffect(() => {}, [props]);

  return (
    <div>
      {props.inventoryHistories ? (
        <div>
          {props.inventoryHistories.map((inventoryHistory, i) => (
            <div key={i}>
              <InventoryHistoryItem
                inventoryHistory={inventoryHistory}
                unit={props.unit}
                key={i}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default InventoryHistoryList;
