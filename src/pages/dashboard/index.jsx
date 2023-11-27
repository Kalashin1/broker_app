import Layout from "../layout";
import EarningOverview from "../../components/Earnings-Overview";
import HomeCards from "../../components/HomeCards";
import TransactionTable from "../../components/Transaction-Table";
import TransactionTimeline from "../../components/Transaction-Timeline";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <EarningOverview />
          <HomeCards />
        </div>
        <div className="row">
          <TransactionTimeline />
          <TransactionTable />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
