import React, { useEffect } from "react";

function InventoryHistoryItem(props) {
  const history_status = (status) => {
    switch (status) {
      case "success":
        return <span className="badge badge-success">berhasil</span>;
      case "failed":
        return <span className="badge badge-danger">gagal</span>;
      default:
        return null;
    }
  };

  useEffect(() => {}, [props]);

  return (
    <div className="card-inventory-history small-text">
      <table>
        <tr className="table-separator table-height">
          <td>
            <span>
              <span className="text-grey"> tanggal beli</span>{" "}
              {props.inventoryHistory.recorded_date}
            </span>
          </td>
          <td className="text-right history-status">
            <span className="small-text">
              {history_status(props.inventoryHistory.status)}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <span className="text-grey"> Harga satuan</span>
            </span>
          </td>
          <td className="text-right">
            <span>
              <span className="text-grey"> Jumlah</span>
            </span>
          </td>
        </tr>
        <tr className="table-separator table-height">
          <td>
            <span>
              Rp{" "}
              {props.inventoryHistory.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            </span>
          </td>
          <td className="text-right">
            <span>
              {props.inventoryHistory.quantity
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              {props.unit}
            </span>
          </td>
        </tr>
        <tr className="inventory-history-price">
          <td>
            <span className="text-grey"> Total Pembelian</span>
          </td>
          <td className="text-right">
            Rp{" "}
            {props.inventoryHistory.amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}
export default InventoryHistoryItem;
