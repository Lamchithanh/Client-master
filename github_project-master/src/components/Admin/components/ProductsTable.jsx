import React, { useEffect } from "react";
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import  { findAllProducts } from "../../State/Product/Action"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ProductsTable = () => {
  const dispatch = useDispatch(); 
 
    const { products } = useSelector(store => store);
    console.log("products111 ---" , products)
    
    // const products = useSelector(state => state.product);

  console.log("jwt : ", localStorage.getItem("jwt"));
   

    useEffect(() => {
      dispatch(findAllProducts());
    },[] )
    return (
        <div className="p-5 bg-[gray] text-white"><TableContainer sx={{bgcolor:'gray'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Số lượng tồn kho</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.products.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                {/* <TableCell align="right">{item.}</TableCell> */}
                {/* <TableCell align="right">{item.fat}</TableCell>
                <TableCell align="right">{item.carbs}</TableCell>
                <TableCell align="right">{item.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></div>
    )
}
export default ProductsTable