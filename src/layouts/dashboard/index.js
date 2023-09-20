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

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useState } from "react";
import team2 from "assets/images/team-2.jpg";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  const components = [
    {
      title: "Total wagered ranking",
      progress: { content: "36k", percentage: 60 },
    },
    {
      title: "Total win ranking",
      progress: { content: "2M", percentage: 90 },
    },
    {
      title: "Total lose ranking",
      progress: { content: "$435", percentage: 30 },
    },
  ]

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = (itemIndex) => {
    setSelectedItem(components[itemIndex]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  const usersRanking = [
    {
      username: "Ifeanyi",
      userImg: team2,
      betId: 40320903,
      email: "john@valiant_joe.com"
    },
    {
      username: "Joe",
      userImg: team2,
      betId: 43340163,
      email: "jaeme@valiant_joe.com"
    },
    {
      username: "Ifeanyi305",
      userImg: "https://img2.nanogames.io/avatar/25671/s",
      betId: 423920903,
      email: "john@valiant_joe.com"
    },
    {
      username: "Collins",
      userImg: "https://img2.nanogames.io/avatar/25671/s",
      betId: 403345903,
      email: "jaeme@valiant_joe.com"
    },
    {
      username: "Laura",
      userImg: team2,
      betId: 4032474,
      email: "jaeme@valiant_joe.com"
    },
    {
      username: "Ralph",
      userImg: "https://img2.nanogames.io/avatar/25671/s",
      betId: 420903,
      email: "john@valiant_joe.com"
    },
    {
      username: "Jonh",
      userImg: team2,
      betId: 3040595,
      email: "jaeme@valiant_joe.com"
    },
    {
      username: "Doe",
      userImg: "https://img2.nanogames.io/avatar/25671/s",
      betId: 420903,
      email: "john@valiant_joe.com"
    },
    {
      username: "Vincent",
      userImg: team2,
      betId: 40903,
      email: "jaeme@valiant_joe.com"
    },
    {
      username: "Darcel",
      userImg: team2,
      betId: 403903,
      email: "john@valiant_joe.com"
    }
  ]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Gross gaming revenue" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total player balance" }}
                count="$3,462"
                percentage={{ color: "success", text: "+2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Deposited players" }}
                count="460"
                icon={{ color: "info", component: "paid" }}
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
                title="Demographic"
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
        {components.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div>
              <button onClick={() => handleButtonClick(index)}>
                {item.progress.content}
              </button>
            </div>
          </div>
        ))}
        <div className="bg-[#fff] top-[-20%] md:w-[45%] mb-4 flex justify-center">
          {selectedItem && (
            <div>
              <div className="flex justify-between items-center gap-2 p-4">
                <h2>{selectedItem.title}</h2>
                <button onClick={closeModal}>&times;</button>
              </div>
              <div className="overflow-x-auto">
                <table className="p-[9px]">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">User</th>
                      <th className="px-4 py-2 text-left">Bet ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersRanking.map((rank, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                        <td className="px-4 py-2 flex gap-4 items-center">
                          <img className="w-[30px] rounded-[50%]" alt="user_img" src={rank.userImg} />
                          <div>
                            <p>{rank.username}</p>
                            <small>{rank.email}</small>
                          </div>
                        </td>
                        <td className="px-4 py-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">{rank.betId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
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
