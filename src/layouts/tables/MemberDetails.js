import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import editRole from './data/memberDetailsTable';

const MemberDetails = () => {
  const location = useLocation();
  const row = location?.state;
  const { basicInformation,
    accountInformation,
    sessions,
    vipInformaton,
    affiliateInfo,
    walletInfo,
    gameReport,
    detailTable,
    usdtWallet,
    ppdWallet,
    pplWallet,
    ppfWallet,
    ppeWallet } = editRole();
  const { basicInfoColumns, basicInfoRows } = basicInformation;
  const { accInfoColumns, accInfoRows } = accountInformation;
  const { sessionColumns, sessionRows } = sessions;
  const { vipInfoColumns, vipInfoRows } = vipInformaton;
  const { affiliateInfoCol, affiliateInfoRow } = affiliateInfo;
  const { walletInfoCol, walletInfoRow } = walletInfo;
  const { gameReportColumns, gameReportRows } = gameReport;
  const { detailTableColumns, detailsTableRows } = detailTable;
  const { usdtWalletColummns, usdtWalletRows } = usdtWallet;
  const { ppdWalletColummns, ppdWalletRows } = ppdWallet;
  const { pplWalletColummns, pplWalletRows } = pplWallet;
  const { ppfWalletColummns, ppfWalletRows } = ppfWallet;
  const { ppeWalletColummns, ppeWalletRows } = ppeWallet;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Basic Information</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={basicInfoColumns} rows={basicInfoRows} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Account Information</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={accInfoColumns} rows={accInfoRows} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Sessions used in past</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={sessionColumns} rows={sessionRows} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">VIP Information</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={vipInfoColumns} rows={vipInfoRows} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Affiliate Information</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={affiliateInfoCol} rows={affiliateInfoRow} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Wallet Information</SoftTypography>
          </SoftBox>
          <div className="md:w-[50%]">
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={walletInfoCol} rows={walletInfoRow} />
              </SoftBox>
            </Card>
          </div>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Game report</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={gameReportColumns} rows={gameReportRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Detail table</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={detailTableColumns} rows={detailsTableRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">USDT Wallet</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={usdtWalletColummns} rows={usdtWalletRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">PPD wallet</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={ppdWalletColummns} rows={ppdWalletRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">PPL Wallet</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={pplWalletColummns} rows={pplWalletRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">PPF Wallet</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={ppfWalletColummns} rows={ppfWalletRows} />
              </SoftBox>
            </Card>
        </SoftBox>
        <SoftBox mb={3}>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">PPE Wallet</SoftTypography>
          </SoftBox>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={ppeWalletColummns} rows={ppeWalletRows} />
              </SoftBox>
            </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default MemberDetails;
