import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main-layout/main-layout";
import { UsersPage } from "./pages/users/Users";
import { APP_ROUTES } from "./enum/app-routes.enum";
import { UserDetailsPage } from "./pages/user-details/User-details";

function App() {
  return (
    <div className="container-fluid px-0 main-app-container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={APP_ROUTES.HOME} element={<UsersPage />}></Route>
          <Route
            path={`${APP_ROUTES.DETAILS}/:userId`}
            element={<UserDetailsPage />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
