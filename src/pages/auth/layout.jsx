/* eslint-disable react/prop-types */
const Layout = ({
  children
}) => {
  return (
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
