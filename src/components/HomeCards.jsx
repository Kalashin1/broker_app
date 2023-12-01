import { formatAsCurrency } from "../helper";

/* eslint-disable react/prop-types */
const Card = ({
  title = "Income",
  amount = 36358,
  percentageNumber = 9,
  polarity = "+", //  + or -
  startDate = "Mar/2023",
  endDate = "Dec/2023",
}) => {
  return (
    <div className="card overflow-hidden">
      <div className="card-body p-4">
        <h5 className="card-title mb-9 fw-semibold">{title}</h5>
        <div className="row align-items-center">
          <div className="col-8">
            <h4 className="fw-semibold mb-3">
              {formatAsCurrency({
                number: amount,
                currency: "USD",
                style: "currency",
                locality: "en-US",
              })}
            </h4>
            <div className="d-flex align-items-center mb-3">
              <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                <i className="ti ti-arrow-up-left text-success"></i>
              </span>
              <p className="text-dark me-1 fs-3 mb-0">
                {polarity} {percentageNumber}%
              </p>
              <p className="fs-3 mb-0">yesterday</p>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-4">
                <span className="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                <span className="fs-2">{startDate}</span>
              </div>
              <div>
                <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                <span className="fs-2">{endDate}</span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center">
              <div id="breakup"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeCards = () => {
  const cardData = [
    {
      title: "Profit",
      amount: 36358,
      percentageNumber: 9,
      polarity: "+", //  + or -
      startDate: "Mar/2023",
      endDat: "Dec/2023",
    },
    {
      title: "Withdrawals",
      amount: 13472,
      percentageNumber: 12,
      polarity: "-",
      startDate: "Mar/2023",
      endDate: "Dec/20203",
    },
  ];
  return (
    <div className="col-lg-4">
      <div className="row">
        {cardData &&
          cardData.map((cD, index) => (
            <div className="col-lg-12" key={index}>
              <Card {...cD} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCards;
