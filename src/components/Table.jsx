/* eslint-disable react/prop-types */
import { formatAsCurrency } from "../helper";

const Table = ({
  title = "Recent Transactions",
  dataTitle = ["Id", "Assigned", "Name", "Priority", "Budget"],
  data = [
    {
      user: "Sunil Joshi",
      type: "Deposit", // or withdrawal
      status: "requested",
      amount: 3465,
    },
  ],
}) => {
  return (
    <div className="col-lg-8 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="card-body p-4">
          <h5 className="card-title fw-semibold mb-4">{title}</h5>
          <div className="table-responsive">
            <table className="table text-nowrap mb-0 align-middle">
              <thead className="text-dark fs-4">
                <tr>
                  {dataTitle.map((dT, index) => (
                    <th className="border-bottom-0" key={index}>
                      <h6 className="fw-semibold mb-0">{dT}</h6>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => (
                  <tr key={index}>
                    <td className="border-bottom-0">
                      <h6 className="fw-semibold mb-0">{index + 1}</h6>
                    </td>
                    <td className="border-bottom-0">
                      <h6 className="fw-semibold mb-1">{d.user}</h6>
                    </td>
                    <td className="border-bottom-0">
                      <p className="mb-0 fw-normal">{d.type}</p>
                    </td>
                    <td className="border-bottom-0">
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-primary rounded-3 fw-semibold">
                          {d.status}
                        </span>
                      </div>
                    </td>
                    <td className="border-bottom-0">
                      <h6 className="fw-semibold mb-0 fs-4">
                        {formatAsCurrency({
                          number: d.amount,
                          currency: "USD",
                          locality: "en-US",
                          style: "currency",
                        })}
                      </h6>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Table;