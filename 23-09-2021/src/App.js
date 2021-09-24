import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";

import { confirm } from "react-confirm-box";
import "reactjs-popup/dist/index.css";
function App() {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Firstname", field: "firstname" },
    { title: "Lastname", field: "lastname" },
  ];
  return (
    <div className="App">
      <h4 align="center" style={{ fontSize: "xx-large" }}>
        React-Table
      </h4>
      <div className="table">
        <MaterialTable
          actions={[
            {
              icon: "delete",
              tooltip: "Delete User",
              onClick: async (event, selectedRow) => {
                const result = await confirm(
                  "Are you sure you want to delete this?"
                );
                if (result) {
                  new Promise((resolve, reject) => {
                    const index = selectedRow.tableData.id;
                    const updatedRows = [...data];
                    updatedRows.splice(index, 1);
                    setData(updatedRows);
                    resolve();
                  });
                }
              },
            },
          ]}
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                const updatedRows = [
                  ...data,
                  { id: Math.floor(Math.random() * 100), ...newRow },
                ];
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 200);
              }),
            // onRowDelete: (selectedRow) =>
            //   new Promise((resolve, reject) => {
            //     const index = selectedRow.tableData.id;
            //     const updatedRows = [...data];
            //     updatedRows.splice(index, 1);
            //     setTimeout(() => {
            //       setData(updatedRows);
            //       resolve();
            //     }, 200);
            //   }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 200);
              }),
          }}
          options={{
            showTitle: false,
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      </div>
    </div>
  );
}

export default App;
