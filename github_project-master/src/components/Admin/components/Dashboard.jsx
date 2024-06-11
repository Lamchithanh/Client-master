import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Achivement from "./Achivement";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "./ProductsTable";
import { useDispatch, useSelector } from "react-redux";
import { findAllProducts } from "../../State/Product/Action";

const AdminDashboard = () => {
  const dispatch = useDispatch(); 
  const { products } = useSelector((store) => store);  
  
  useEffect(() => {
    dispatch(findAllProducts());
  },[] )
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsTable />
        </Grid>
      </Grid>
    </div>
  );
};
export default AdminDashboard;
