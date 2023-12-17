import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useTableContext from "../hooks/useTableContext";

export default function TableComponent({ table }) {
  const { dispatch } = useTableContext();
  const c_id = table[0].customer_id;
  const [show, setShow] = React.useState(false);
  const [rowData, setRowData] = React.useState({
    items: "",
    price: "",
    remarks: "",
    date: "",
    serial: "",
    monthkey: "",
  });
  console.log(rowData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRowData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const hanldeShow = () => {
    setShow(!show);
  };

  const handleCreate = async () => {
    const response = await fetch("/api/table/" + c_id, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rowData),
    });
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      setRowData({
        items: "",
        price: "",
        remarks: "",
        date: "",
        serial: "",
        monthkey: "",
      });
      dispatch({ type: "CREATE_TABLE", payload: json });
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.N&nbsp;</TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>review&nbsp;</TableCell>
            <TableCell>month&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.serial}</TableCell>
              <TableCell component="th" scope="row">
                {row.items}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.remarks}</TableCell>
              <TableCell>{row.monthkey}</TableCell>
            </TableRow>
          ))}
          {show && (
            <TableRow>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-600"
                  name="serial"
                  value={rowData.serial}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-600"
                  name="items"
                  value={rowData.items}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-300"
                  name="price"
                  value={rowData.price}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-600"
                  name="date"
                  value={rowData.date}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-600"
                  name="remarks"
                  value={rowData.remarks}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  className="border-2 border-neutral-600"
                  name="monthkey"
                  value={rowData.monthkey}
                  onChange={handleChange}
                />
                <button onClick={handleCreate}>create</button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-end mr-4">
        <button
          onClick={hanldeShow}
          className="bg-blue-600 px-5 py-1 rounded-md"
        >
          Add
        </button>
      </div>
    </TableContainer>
  );
}
