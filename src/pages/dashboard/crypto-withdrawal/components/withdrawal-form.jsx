const WithdrawalForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Forms</h5>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  BTC Address
                </label>
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalForm;
