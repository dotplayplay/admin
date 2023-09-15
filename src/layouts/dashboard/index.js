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
import { MdOutlinePaid } from "react-icons/md"
import { MdRocketLaunch } from "react-icons/md"
import { VscLaw } from "react-icons/vsc"

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  const gameComponents = [
    {
      mainDashboard: [
        {
          title: "Deposited players",
          count: { deposited_players: 60 },
          icon: { paid_players: <MdOutlinePaid className="text-[#fff]" /> },
        },
        {
          title: "Gross gaming revenue",
          count: { gross_gaming_revenue: 340 },
          icon: { gaming_revenue: <MdRocketLaunch className="text-[#fff]" /> },
        },
        {
          title: "Total player balance",
          count: { total_player_balance: 660 },
          icon: { player_balance: <VscLaw className="text-[#fff]" /> },
        },
      ],
      demographic: [
        { age: 35 },
        { average_online_hours: 18 },
        { country: "Ghana" },
      ],
      playerBoard: [
        { total_wagered_ranking: 25 },
        { total_win_ranking: 80 },
        { total_lose_ranking: 12 },
      ],
      taskList: [
        { pending_withdrawals: 34 },
        { pending_claim_approvals: 40 },
        { pending_deposit_approvals: 10 },
      ]
    },
  ];

  const { mainDashboard, demographic, playerBoard, taskList } = gameComponents[0];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Wallet balance" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "P2E users" }}
                count="+3,462"
                percentage={{ color: "success", text: "+2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total withdrawals" }}
                count="$103,430"
                percentage={{ color: "error", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "paid"
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <div className="flex flex-wrap gap-4 mb-4">
          {
            mainDashboard.map((dashboardData, index) => (
              <div key={index} className="bg-[#FFFFFF] w-full md:w-fit justify-between flex items-center gap-4 p-4 rounded-[14px] mb-[4px]">
                <div>
                  <p className="text-[13px] font-extrabold">{dashboardData.title}</p>
                  <div>
                    {dashboardData.count && (
                      <p className="font-extrabold ">{Object.values(dashboardData.count)[0]}</p>
                    )}
                  </div>
                </div>
                <div className="bg-[#23A6FE] rounded-[7px] p-4 w-fit">
                  {dashboardData.icon && (
                    <p> {Object.values(dashboardData.icon)[0]} </p>
                  )}
                </div>
              </div>
            ))
          }
        </div>
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
            <Projects />
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
