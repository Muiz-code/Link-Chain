import { sidebarImgs } from "./Mapping/Map";
import SideBarImg from "./SubComponent/SideBarImg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[100%] flex">
      <div className="bg-[#CDB1DD] h-screen w-[35%] relative overflow-hidden flex button">
        {sidebarImgs.map((items) => (
          <SideBarImg key={items.id} {...items} style={items.style} />
        ))}
        <div className="button navbarr flex flex-col w-[100%] justify-center place-items-end">
          <Link
            to="/login"
            className="text-[25px] text-[#7D3C98] flex font-[600] rounded-xl px-4 text-decoration-none  py-3 "
          >
            LOG IN
          </Link>
          <Link
            to="/signup"
            className="text-[25px] text-[#7D3C98] flex font-[600] rounded-xl px-4 text-decoration-none py-3 "
          >
            SIGN UP
          </Link>
        </div>
      </div>
      <div className="flex w-[65%] justify-center h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
