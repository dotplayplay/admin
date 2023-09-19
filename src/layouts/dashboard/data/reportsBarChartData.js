
const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "total deposit", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "Total wagered ranking",
      progress: { content: "36k", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "Total win ranking",
      progress: { content: "2M", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "Total lose ranking",
      progress: { content: "$435", percentage: 30 },
    },
  ],
};

export default reportsBarChartData;
