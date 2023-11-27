const TransactionTimeline = () => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <div className="card w-100">
        <div className="card-body p-4">
          <div className="mb-4">
            <h5 className="card-title fw-semibold">Recent Transactions</h5>
          </div>
          <ul className="timeline-widget mb-0 position-relative mb-n5">
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                09:30
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-primary flex-shrink-0 my-8"></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1">
                Payment received from John Doe of $385.90
              </div>
            </li>
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                10:00 am
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-info flex-shrink-0 my-8"></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                New sale recorded{" "}
                <a
                  href="javascript:void(0)"
                  className="text-primary d-block fw-normal"
                >
                  #ML-3467
                </a>
              </div>
            </li>
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                12:00 am
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-success flex-shrink-0 my-8"></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1">
                Payment was made of $64.95 to Michael
              </div>
            </li>
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                09:30 am
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-warning flex-shrink-0 my-8"></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                New sale recorded{" "}
                <a
                  href="javascript:void(0)"
                  className="text-primary d-block fw-normal"
                >
                  #ML-3467
                </a>
              </div>
            </li>
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                09:30 am
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-danger flex-shrink-0 my-8"></span>
                <span className="timeline-badge-border d-block flex-shrink-0"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1 fw-semibold">
                New arrival recorded
              </div>
            </li>
            <li className="timeline-item d-flex position-relative overflow-hidden">
              <div className="timeline-time text-dark flex-shrink-0 text-end">
                12:00 am
              </div>
              <div className="timeline-badge-wrap d-flex flex-column align-items-center">
                <span className="timeline-badge border-2 border-success flex-shrink-0 my-8"></span>
              </div>
              <div className="timeline-desc fs-3 text-dark mt-n1">
                Payment Done
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionTimeline;
