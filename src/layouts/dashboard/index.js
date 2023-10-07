import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import typography from "assets/theme/base/typography";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import { useEffect, useState } from "react";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {

  const [loading,setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    async function getLogs() {
      const url = `http://localhost:8000/api/dashboard-details`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data?.data) {
          setDashboardData(data.data)
        }
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    }
    getLogs();
  }, []);




  
const _reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "total deposit", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "total wins",
      progress: { content: [loading?"loading":dashboardData[1].totalWins], percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "total loses",
      progress: { content: [loading?"loading": dashboardData[1].totalLoses], percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "total bets",
      progress: { content: [loading?"loading":dashboardData[1].totalBets], percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "total wagered",
      progress: { content: [loading?"loading":"$"+dashboardData[1].totalWagered], percentage: 50 },
    },
  ],
};


  const { size } = typography;
  const { chart, items } = _reportsBarChartData;


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total deposited player" }}
                count={loading?"loading...": dashboardData[0].totalDepositedPlayers}
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "TotalGGR" }}
                count={loading?"loading...":dashboardData[0].totalGGR}
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "TotalPlayer balance" }}
                count={loading?"loading...":dashboardData[0].totalPlayerBalance}
                percentage={{ color: "success", text: "+2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total wagered" }}
                count={loading? "loading":"$"+dashboardData[1].totalWagered}
                percentage={{ color: "error", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "paid"
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Users registration Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2022
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            {dashboardData?.length !== 0? (
             <Projects data={dashboardData} />
            ):('')
            }
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
