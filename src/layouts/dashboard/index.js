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

// icons
import { GiCoalWagon } from "react-icons/gi";
import { GiWindyStripes } from "react-icons/gi";
import { MdClosedCaptionOff } from "react-icons/md";

import { useState } from "react";
import team2 from "assets/images/team-2.jpg";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  const components = [
    {
      title: "Total wagered ranking",
      progress: { content: "36k", percentage: 60 },
      icon: <GiCoalWagon className="text-[#343483]" />,
    },
    {
      title: "Total win ranking",
      progress: { content: "2M", percentage: 90 },
      icon: <GiWindyStripes className="text-[#ffa600ea]" />,
    },
    {
      title: "Total lose ranking",
      progress: { content: "$435", percentage: 30 },
      icon: <MdClosedCaptionOff className="text-[#9a3b28]" />,
    },
  ]

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = (itemIndex) => {
    setSelectedItem(components[itemIndex]);
    setModalIsOpen(!modalIsOpen);
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
      <div className="dashboard">
        <DashboardNavbar />
      </div>
      <SoftBox py={3}>
        <div className="dashboard">
          <SoftBox mb={3}>
            <div className="flex gap-4 items-center justify-around flex-wrap">
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
            </div>
          </SoftBox>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
            </Grid>
          </SoftBox>
          <SoftBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5}>
                <div className="bg-[#fff] p-4 rounded-[13px]">
                  <ReportsBarChart chart={chart}/>
                  <div className="my-4">
                    <p className="text-[#344767] text-[13px] font-extrabold">Active Users</p>
                    <p className="text-[#79859C] text-[13px]">(<strong>+23%</strong>) than last week</p>
                  </div>
                  <div className="flex gap-6 items-center mb-4 dashboard">
                    {components.map((item, index) => (
                      <div key={index} className="bg-[#e2e4eb85] px-2 py-[3px] rounded-[10px]">
                        <div className="cursor-pointer" onClick={() => handleButtonClick(index)}>
                          <div className="flex gap-2 items-center my-2">
                            <p className="text-[13px] font-extrabold">{item.title}</p>
                            <button onClick={() => handleButtonClick(index)}>{item.icon}</button>
                          </div>
                          <button className="font-extrabold" onClick={() => handleButtonClick(index)}>
                            {item.progress.content}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
        </div>
        {modalIsOpen ? (
          <div className="bg-[#fff] w-[52%] md:left-[40%] wagered fixed h-[80%] overflow-y-auto create_user_container top-[10%] md:w-[30%] mb-4">
            <div className="flex top-[0px] bg-[#fff] sticky justify-between items-center gap-2 p-4">
              <h2 className="text-[16px] font-extrabold">{selectedItem.title}</h2>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div className="overflow-x-auto">
              <table className="p-[9px] w-full">
                <thead>
                  <tr>
                    <th className="px-4 text-[12] py-2 text-left">User</th>
                    <th className="px-4 text-[12] py-2 text-left">Bet ID</th>
                  </tr>
                </thead>
                <tbody>
                  {usersRanking.map((rank, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="px-4 py-2 flex gap-4 items-center">
                        <img className="w-[30px] rounded-[50%]" alt="user_img" src={rank.userImg} />
                        <div>
                          <p className="text-[13px] font-extrabold">{rank.username}</p>
                          <small className="text-[12px]">{rank.email}</small>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-[13px] font-extrabold">{rank.betId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : <></>}
        <div className="dashboard">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="h-[70%] create_user_container">
                <OrderOverview />
              </div>
            </Grid>
          </Grid>
        </div>
      </SoftBox>
      <div className="dashboard">
        <Footer />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
