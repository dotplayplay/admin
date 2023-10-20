import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import Header from "./components/Header"
import PlatformSettings from "layouts/userprofile/components/PlatformSettings";
import Chat from "layouts/userprofile/components/chats"

function Userprofile() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="User's information"
              info={{
                fullName: "User full name",
                Username: "Jease born",
                mobile: "(44)...........",
                Age: 24,
                birthDate: '12/12/1998',
                email: "alex@mail.com",
                Nationality: "USA",
                State: "Texas",
                affilaiteCode: "JKhWsbwhA44",
                walletBalance: "$56,998.09",
                chatMessges: 23663
              }}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <Chat />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Userprofile;
