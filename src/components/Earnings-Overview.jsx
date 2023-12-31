const EarningOverview = () => {
  return (
    <div className="col-lg-8 d-flex align-items-strech">
      <div className="card w-100">
        <div className="card-body">
          <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
            <div className="mb-3 mb-sm-0">
              <h5 className="card-title fw-semibold">Sales Overview</h5>
            </div>
            <div>
              <select className="form-select">
                <option value="1">March 2023</option>
                <option value="2">April 2023</option>
                <option value="3">May 2023</option>
                <option value="4">June 2023</option>
              </select>
            </div>
          </div>
          <div id="chart"></div>
        </div>
      </div>
    </div>
  );
};

export default EarningOverview;
