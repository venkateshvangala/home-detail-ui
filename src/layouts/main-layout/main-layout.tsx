import { Outlet } from "react-router-dom";
import { Navbar } from "../../shared/navbar/navbar";
import "./main-layout.scss";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="row no-gutters content-container px-0 mx-0">
        <>
          <div className="container-fluid app-filters-container p-0 mb-3">
            <div className="container-fluid px-0">
              <Outlet />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MainLayout;
