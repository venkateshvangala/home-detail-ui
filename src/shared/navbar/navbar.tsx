import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="container-fluid  nav-bar-container">
      <span>Alpha Theory</span>
      <div className="d-flex align-items-center">
        <div className="profile-container">
          <span> Venkatesh Kumar V</span>
        </div>
      </div>
    </div>
  );
};
