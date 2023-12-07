import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

function Tables() {
  const { columns, rows } = authorsTableData;
  const [addMember, setAddMember] = useState(false);
  const navigate = useNavigate();
  const handleAddMember = () => {
    setAddMember(!addMember)
  }

  const memberDetail = (rowId) => {
    navigate(`/detail/${rows[rowId].userID.props.job}`);
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    number: "",
    userId: "",
    vipLevel: "",
    affliateModel: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const storedSubmittedData = localStorage.getItem("submittedData");
    if (storedSubmittedData) {
      setSubmittedData(JSON.parse(storedSubmittedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  const generateRandomData = () => {
    const userId = Math.floor(Math.random() * 1000000);

    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      number: "",
      userId: userId,
      vipLevel: "",
      affliateModel: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    generateRandomData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const style = {
    input: "w-full border-[#6B6B6B] px-[5px] py-[1px] block border-[1px] rounded-[8px]",
    tableCol: "px-4 py-2 text-center",
    label: "block text-[13px]",
    inputCon: "mb-[10px]"
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Authors table</SoftTypography>
            </SoftBox>
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
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
