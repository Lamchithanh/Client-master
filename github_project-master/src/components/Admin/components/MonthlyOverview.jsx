import { AcUnitOutlined } from "@mui/icons-material";
import React from "react";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@mui/material";

const salesData = [
  {
    stats: " 245K",
    tittle: "Sales",
    color: "#FAD02E",
    icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5K",
    tittle: "Customers",
    color: "#45CE30",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54K",
    tittle: "Products",
    color: "#E44236 ",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88K",
    tittle: "Revenue",
    color: "#74B9FF",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];
const renderStatus = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.tittle}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};
const MonthlyOverview = () => {
  return (
    <Card sx={{bgcolor:"#2C3335", color:"white"}}> 
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, mx:2 }}
            >
              Total 48.5% groth
            </Box>
            this Monthly
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem ! important",
            letterSpacing: " . 15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} ! important ` }}>
        <Grid container spacing={[5,0]}>
          {renderStatus()}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default MonthlyOverview;
