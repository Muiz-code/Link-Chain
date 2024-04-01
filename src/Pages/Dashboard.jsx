import Content1 from "../Components/Content1";
import NavBar from "../Components/NavBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <Content1 />
      </div>
    </div>
  );
};

export default Dashboard;
