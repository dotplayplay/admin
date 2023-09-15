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
import { MdOutlinePaid } from "react-icons/md";
import { MdRocketLaunch } from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { TbMilitaryRank } from "react-icons/tb";
import { GiRank1 } from "react-icons/gi";
import { MdPendingActions } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useState } from "react";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  const gameComponents = [
    {
      mainDashboard: [
        {
          title: "Deposited players",
          data: { deposited_players: 60 },
          icon: { paid_players: <MdOutlinePaid className="text-[#fff]" /> },
        },
        {
          title: "Gross gaming revenue",
          data: { gross_gaming_revenue: 340 },
          icon: { gaming_revenue: <MdRocketLaunch className="text-[#fff]" /> },
        },
        {
          title: "Total player balance",
          data: { total_player_balance: 660 },
          icon: { player_balance: <VscLaw className="text-[#fff]" /> },
        },
      ],
      demographic: [
        {
          title: "Age",
          data: { age: 35 },
          icon: { player_age: <MdOutlineSupportAgent className="text-[#fff]" /> },
        },
        {
          title: "average_online_hours",
          data: { average_online_hours: 18 },
          icon: { online_hours: <BsFillPersonLinesFill className="text-[#fff]" /> },
        },
        {
          title: "Country",
          data: { country: "Ghana" },
          icon: { player_country: <AiOutlineFlag className="text-[#fff]" /> },
        },
      ],
      playerBoard: [
        {
          title: "total_wagered_ranking",
          data: { total_wagered_ranking: 25 },
          icon: { wagered_ranking: <GiRank3 className="text-[#fff]" /> },
        },
        {
          title: "total_win_ranking",
          data: { total_win_ranking: 80 },
          icon: { win_ranking: <TbMilitaryRank className="text-[#fff]" /> },
        },
        {
          title: "total_lose_ranking",
          data: { total_lose_ranking: 12 },
          icon: { lose_ranking: <GiRank1 className="text-[#fff]" /> }
        },
      ],
      taskList: [
        {
          title: "pending_withdrawals",
          data: { pending_withdrawals: 34 },
          icon: { player_pending_withdrawals: <MdPendingActions className="text-[#fff]" /> },
        },
        {
          title: "pending_claim_approvals",
          data: { pending_claim_approvals: 40 },
          icon: { player_pending_claim_approvals: <MdOutlinePendingActions className="text-[#fff]" /> },
        },
        {
          title: "pending_deposit_approvals",
          data: { pending_deposit_approvals: 10 },
          icon: { player_pending_deposit_approvals: <MdOutlinePending className="text-[#fff]" /> },
        },
      ]
    },
  ];

  const { mainDashboard, demographic, playerBoard, taskList } = gameComponents[0];

  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore)
  }

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
        <div>
          <div className="flex flex-wrap gap-4 mb-4">
            {
              mainDashboard.map((dashboardData, index) => (
                <div key={index} className="bg-[#FFFFFF] w-full md:w-fit justify-between flex items-center gap-4 p-4 rounded-[14px] mb-[4px]">
                  <div>
                    <p className="text-[13px] font-extrabold">{dashboardData.title}</p>
                    <div>
                      {dashboardData.data && (
                        <p className="font-extrabold ">{Object.values(dashboardData.data)[0]}</p>
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
          <div className="flex gap-2 cursor-pointer items-center">
            <button
              onClick={handleViewMore}
            >{viewMore ? "view less" : "view more"}</button>
            <button onClick={handleViewMore}>
              {
                viewMore ? (<AiOutlineDown />) : (<AiOutlineRight />)
              }
            </button>
          </div>
          {
            viewMore ? (
              <div>
                <p className="text-[17px] font-extrabold mt-4">Demographic</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {
                    demographic.map((demographicData, index) => (
                      <div key={index} className="bg-[#FFFFFF] w-full md:w-fit justify-between flex items-center gap-4 p-4 rounded-[14px] mb-[4px]">
                        <div>
                          <p className="text-[13px] font-extrabold">{demographicData.title}</p>
                          <div>
                            {demographicData.data && (
                              <p className="font-extrabold ">{Object.values(demographicData.data)[0]}</p>
                            )}
                          </div>
                        </div>
                        <div className="bg-[#23A6FE] rounded-[7px] p-4 w-fit">
                          {demographicData.icon && (
                            <p> {Object.values(demographicData.icon)[0]} </p>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
                <p className="text-[17px] font-extrabold mt-4">PlayerBoard</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {
                    playerBoard.map((playerBoardData, index) => (
                      <div key={index} className="bg-[#FFFFFF] w-full md:w-fit justify-between flex items-center gap-4 p-4 rounded-[14px] mb-[4px]">
                        <div>
                          <p className="text-[13px] font-extrabold">{playerBoardData.title}</p>
                          <div>
                            {playerBoardData.data && (
                              <p className="font-extrabold ">{Object.values(playerBoardData.data)[0]}</p>
                            )}
                          </div>
                        </div>
                        <div className="bg-[#23A6FE] rounded-[7px] p-4 w-fit">
                          {playerBoardData.icon && (
                            <p> {Object.values(playerBoardData.icon)[0]} </p>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
                <p className="text-[17px] font-extrabold mt-4">Task List</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {
                    taskList.map((taskListData, index) => (
                      <div key={index} className="bg-[#FFFFFF] w-full md:w-fit justify-between flex items-center gap-4 p-4 rounded-[14px] mb-[4px]">
                        <div>
                          <p className="text-[13px] font-extrabold">{taskListData.title}</p>
                          <div>
                            {taskListData.data && (
                              <p className="font-extrabold ">{Object.values(taskListData.data)[0]}</p>
                            )}
                          </div>
                        </div>
                        <div className="bg-[#23A6FE] rounded-[7px] p-4 w-fit">
                          {taskListData.icon && (
                            <p> {Object.values(taskListData.icon)[0]} </p>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : (
              <p></p>
            )
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
