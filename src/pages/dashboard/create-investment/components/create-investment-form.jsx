const CreateInvestmentForm = () => {
  return (
    <div className="row justify-content-center w-100">
      <div className="col-md-8 col-lg-6 col-xxl-3">
        <div className="card mb-0">
          <div className="card-body">
            <a
              href="./index.html"
              className="text-nowrap logo-img text-center d-block py-3 w-100"
            >
              <img
                src="../assets/images/logos/dark-logo.svg"
                width="180"
                alt=""
              />
            </a>
            <p className="text-center">Create Investment</p>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Capital
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  ROI
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Duration
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-bold">New to Modernize?</p>
                <a
                  className="text-primary fw-bold ms-2"
                  href="./authentication-register.html"
                >
                  Create Investment
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvestmentForm;
