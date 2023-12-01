/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { SCREEN_NAMES } from "../navigation/constants";

const Sidebar = () => {
  const links = [
    {
      path: SCREEN_NAMES.BANK_WITHDRAWAL,
      text: "Bank Withdrawal",
    },
    {
      path: SCREEN_NAMES.CRYPTO_WITHDRAWAL,
      text: "Crypto Withdrawal",
    },
    {
      path: '/',
      text: "Investment Plans",
    },
  ];

  const _links = [
    {
      path: SCREEN_NAMES.INVESTED_USERS,
      text: "Invested Users",
    },
    {
      path: SCREEN_NAMES.CREATE_INVESTMENT,
      text: "Create Investment",
    },
    {
      path: "/",
      text: "Investments",
    },
  ];
  const SidebarLink = ({ link, text }) => (
    <li className="sidebar-item">
      <Link className="sidebar-link" to={link} aria-expanded="false">
        <span>
          <i className="ti ti-article"></i>
        </span>
        <span className="hide-menu">{text}</span>
      </Link>
    </li>
  );
  return (
    <aside className="left-sidebar">
      {/* <!-- Sidebar scroll--> */}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img
              src="../assets/images/logos/dark-logo.svg"
              width="180"
              alt=""
            />
          </a>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        {/* <!-- Sidebar navigation--> */}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            {links &&
              links.map((link, index) => (
                <SidebarLink link={link.path} text={link.text} key={index} />
              ))}

            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Admin</span>
            </li>
            {_links &&
              _links.map((link, index) => (
                <SidebarLink link={link.path} text={link.text} key={index} />
              ))}
          </ul>
        </nav>
        {/* <!-- End Sidebar navigation --> */}
      </div>
      {/* <!-- End Sidebar scroll--> */}
    </aside>
  );
};

export default Sidebar;
