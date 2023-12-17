import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableComponent({ table }) {
    const[show, setShow]=React.useState(false);
  const [rowData, setRowData] = React.useState({
    items:"",
    serial:"",
    price:"",
    Date:"",
    review:"",
    month:""
  });
  const handleChange=(e)=>{
    const{name , value}=e.target;
    setRowData((prev)=>({
        ...prev,
        [name]:value
    }))
  }

  const handleShow=()=>{
    setShow(true)
  }
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
              key={row.items}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.serialnumber}</TableCell>
              <TableCell component="th" scope="row">
                {row.items}
              </TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.remarks}</TableCell>
              <TableCell>{row.monthkey}</TableCell>
            </TableRow>
          ))}
          {show&&(
            <TableRow>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-600"
                    name="serial" 
                    value={rowData.serial}
                    onChange={handleChange}
                    />
                </TableCell>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-600"
                    name="items" 
                    value={rowData.items}
                    onChange={handleChange}
                    />
                </TableCell>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-300"
                    name="price" 
                    value={rowData.price}
                    onChange={handleChange}
                    />
                </TableCell>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-600"
                    name="Date" 
                    value={rowData.Date}
                    onChange={handleChange}
                    />
                </TableCell>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-600"
                    name="review" 
                    value={rowData.review}
                    onChange={handleChange}
                    />
                </TableCell>
                <TableCell>
                    <input type="text"
                    className="border-2 border-neutral-600"
                    name="month" 
                    value={rowData.month}
                    onChange={handleChange}
                    />
                </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-end mr-4">
        <button
        onClick={handleShow}
        className="bg-blue-600 px-5 py-1 rounded-md">Add</button>
      </div>
    </TableContainer>
  );
}
