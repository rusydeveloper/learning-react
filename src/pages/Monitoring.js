import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { server } from "../constants/server";

function Monitoring() {
  const url_api = server;

  const [isLoggedIn, setEmail] = useState(sessionStorage.getItem("isLoggedIn"));
  const [userName, setPassword] = useState(sessionStorage.getItem("userName"));
  const [userToken, setPassword] = useState(
    sessionStorage.getItem("userToken")
  );
  const [userId, setPassword] = useState(sessionStorage.getItem("userId"));

  return (
    <div>
      <Chart
        width={"100%"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Status", "Nilai Transaksi (Juta)"],
          ["Pemesanan", 8175000],
          ["Sudah Dibayar", 3792000],
          ["Selesai", 2695000],
        ]}
        options={{
          title: "Akumulasi Nilai Transaksi (dalam Juta)",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Nilai Transaksi",
            minValue: 0,
          },
          vAxis: {
            title: "Status",
          },
          legend: { position: "none" },
          colors: ["#f7d637"],
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
      <hr />
      <Chart
        width={"100%"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Bulan", "Nilai Transaksi (dalam juta)"],
          [3, 170],
          [4, 291],
          [5, 311],
          [6, 470],
          [7, 889],
          [8, 979],
          [9, 1010],
          [10, 1011],
          [11, 1210],
          [12, 1710],
        ]}
        options={{
          hAxis: {
            title: "Bulan Ke",
            gridlines: { count: 20 },
          },
          vAxis: {
            title: "Nilai Transaksi",
            gridlines: { count: 10 },
          },
          legend: { position: "bottom" },
          colors: ["#F04140"],
        }}
        rootProps={{ "data-testid": "1" }}
      />
      <hr />
      <Chart
        width={"100%"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Kategori Barang Terjual", "Nilai Transaksi"],
          ["Sembako", 23],
          ["Peralatan Rumah Tangga", 11],
          ["Kosmetik", 7],
          ["Alat Tulis Kantor", 2],
          ["Makanan Ringan", 2],
        ]}
        options={{
          title: "Proporsi Kategori Barang Terjual",
          legend: { position: "bottom" },
          colors: ["#e0440e", "#0857ce", "#017c07", "#b703b4", "#b7b7b7"],
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
export default Monitoring;
