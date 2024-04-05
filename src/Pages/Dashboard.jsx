import Content1 from "../Components/Content1";
import Content2 from "../Components/Content2";
import NavBar from "../Components/NavBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex">
        <Content1 />
        <Content2 />
      </div>
    </div>
  );
};

export default Dashboard;
