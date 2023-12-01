/* eslint-disable react/prop-types */
import { formatAsCurrency } from "../helper";

const TimeLine = ({ createdAt, type, amout }) => {
  return (
    <li className="timeline-item d-flex position-relative overflow-hidden">
      <div className="timeline-time text-dark flex-shrink-0 text-end">
        {createdAt}
      </div>
      <div className="timeline-badge-wrap d-flex flex-column align-items-center">
        <span className="timeline-badge border-2 border-primary flex-shrink-0 my-8"></span>
        <span className="timeline-badge-border d-block flex-shrink-0"></span>
      </div>
      <div className="timeline-desc fs-3 text-dark mt-n1">
        {type} Reqeuset of{" "}
        {formatAsCurrency({
          number: amout,
          currency: "USD",
          locality: "en-US",
          style: "currency",
        })}
      </div>
    </li>
  );
};

const TransactionTimeline = () => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="card-body p-4">
          <div className="mb-4">
            <h5 className="card-title fw-semibold">Recent Transactions</h5>
          </div>
          <ul className="timeline-widget mb-0 position-relative mb-n5">
            <TimeLine
              amout={200}
              createdAt={new Date().toDateString()}
              type={"Deposit"}
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionTimeline;
