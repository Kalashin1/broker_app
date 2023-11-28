const TransactionTable = () => {
  return (
    <div className="col-lg-8 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="card-body p-4">
          <h5 className="card-title fw-semibold mb-4">Recent Transactions</h5>
          <div className="table-responsive">
            <table className="table text-nowrap mb-0 align-middle">
              <thead className="text-dark fs-4">
                <tr>
                  <th className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">Name</h6>
                  </th>
                  <th className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">Email</h6>
                  </th>
                  <th className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">Balance</h6>
                  </th>
                  <th className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">Action</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-0">Ibrahim Balde</h6>
                  </td>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-1">Ibrahim.balde@gmbh.com</h6>
                  </td>
                  <td className="border-bottom-0">
                    <p className="mb-0 fw-normal">$3000</p>
                  </td>
                  <td className="border-bottom-0">
                    <button type="button" className="btn btn-primary m-1">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary m-1">
                      Secondary
                    </button>
                  </td>
                  <td className="border-bottom-0">
                    <h6 className="fw-semibold mb-0 fs-4">$3.9</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
