const TopUpForm = () => {
  return (
    <div className="row justify-content-center w-100">
      <div className="col-md-8 col-lg-6 col-xxl-3">
        <div className="card mb-0">
          <div className="card-body">
            <p className="text-center">Top up amount</p>
            <form>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <a
                href="./index.html"
                className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
              >
                Top Up
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpForm;
