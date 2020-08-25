import React, { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";

export default function Booking() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/table").then((res) => {
      console.log(res.data);
      setTables(res.data);
    });
  }, []);

  return (
    <div>
      <form>
        <Guest></Guest>
        <Table data={tables}></Table>
      </form>
    </div>
  );
}
