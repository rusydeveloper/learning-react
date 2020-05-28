import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  checkInventoryLogin,
  loadInventoryList,
  loadInventoryItem,
  clearInventoryItem,
  loadInventoryReport,
} from "../../actions";
import { Card } from "react-bootstrap";

import { Mixpanel } from "../../components/Mixpanel";

import HeaderNav from "../../components/HeaderNav";
import InventoryHistoryList from "../../components/InventoryHistoryList";
import Chart from "react-google-charts";

function Report() {
  const dispatch = useDispatch();
  Mixpanel.track("view report inventory page");
  const user = useSelector((state) => state.user);
  const inventory = useSelector((state) => state.recordInventory.items);
  const inventorySelect = useSelector((state) => state.selectedInventory);
  const inventoryReport = useSelector((state) => state.reportInventory);

  useEffect(() => {
    dispatch(checkInventoryLogin(user.id));
    dispatch(loadInventoryList(user.id));
  }, [dispatch, user]);

  function selectedInventory(user, product) {
    if (product === "") {
      dispatch(clearInventoryItem());
    } else {
      dispatch(loadInventoryItem(product));
      dispatch(loadInventoryReport(user, product));
    }
  }

  return (
    <div className="page-container">
      <HeaderNav title="Laporan Pembelian"></HeaderNav>
      <Card>
        <Card.Body>
          <label>Pilih produk</label>
          <select
            className="form-control"
            onChange={(event) => {
              selectedInventory(user.id, event.target.value);
              Mixpanel.track("select purchasing product report");
            }}
          >
            <option value="">Belum Memilih</option>
            {inventory
              ? inventory.map((inventoryItem, i) => (
                  <option key={i} value={inventoryItem.id}>
                    {inventoryItem.name}
                  </option>
                ))
              : null}
          </select>
        </Card.Body>
      </Card>
      <hr />
      {inventorySelect.history.length > 0 ? (
        <div>
          <div style={{ display: "flex", maxWidth: 900 }}>
            <Chart
              width={"330px"}
              height={"450px"}
              chartType="LineChart"
              loader={<div>Memuat Grafik</div>}
              data={inventoryReport.items}
              options={{
                theme: "material",
                tooltip: { isHtml: true, trigger: "visible" },
                title: "Grafik Pembelian " + inventorySelect.name,
                hAxis: {
                  title: "Tanggal",
                  titleTextStyle: { color: "#333" },
                  showTextEvery: 2,
                  minTextSpacing: 10,
                },
                vAxis: { title: inventorySelect.unit, minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: "75%", height: "70%" },
                legend: "none",

                // lineWidth: 25
              }}
            />
          </div>
          <hr />
          <small>Riwayat Pencatatan</small>
          <InventoryHistoryList
            inventoryHistories={inventorySelect.history}
            unit={inventorySelect.unit}
          ></InventoryHistoryList>
        </div>
      ) : null}
    </div>
  );
}
export default Report;
