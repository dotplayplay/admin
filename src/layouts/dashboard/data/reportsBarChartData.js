
const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "total deposit", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "total wins",
      progress: { content: "36K", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "total loses",
      progress: { content: "2M", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "total bets",
      progress: { content: "$435", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "total wagered",
      progress: { content: "$43K", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
