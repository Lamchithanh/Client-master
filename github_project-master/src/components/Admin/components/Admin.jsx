// import { InboxIcon } from "@heroicons/react/24/outline";
// import React from "react";
// import MailIcon from '@mui/icons-material/Mail';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { useTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const menu = [
//   { name: "Dashbroad", path: "/admin" ,icon:<DashboardIcon/> },
//   { name: "Products", path: "/admin/products" ,icon:<DashboardIcon/>},
//   { name: "Customers", path: "/admin/ customers" ,icon:<DashboardIcon/>},
//   { name: "Orders", path: "/admin/orders",icon:<DashboardIcon/> },
//   { name: "AddProduct", path: "/admin/product/create" ,icon:<DashboardIcon/>},
// //   { name: "", path: " " },
// ];
// export const Admin = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const navigate = useNavigate();
//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       {isLargeScreen && <Toolbar />}
//       <List>
//         {menu.map((item, index) => (
//           <ListItem
//             key={item.name}
//             disablePadding
//             onClick={() => navigate(item.path)}
//           >
//             <ListItemButton>
//                     <ListItemIcon>
//                         {item.icon}
//               </ListItemIcon>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return <div>Admin</div>;
// };
// export default Admin;

import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTheme, useMediaQuery } from "@mui/material";

import CreateProductForm from "./CreateProductForm";
import CustomersTable from "./CustomersTable";
import OrdersTable from "./OrdersTable";
import ProductsTable from "./ProductsTable";
import AdminDashboard from "./Dashboard";






const menu = [
  { name: "Dashbroad", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];

export const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        //   border: "1px solid blue",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <>
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <IconButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </>
      <List>
        <ListItem disablePadding>
          <IconButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="flex h-[100vh] " >
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300 h-full">
          {drawer}
        </div>
        <div className="w-[85%]">
          <Routes>
            <Route path="/" element={<AdminDashboard/>}></Route>
            <Route path="/product/create"element={<CreateProductForm/>} ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
