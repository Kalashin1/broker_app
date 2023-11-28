/* eslint-disable react/prop-types */
const Input = ({
  label,
  type = "text",
  value,
  handleChange,
  showError,
  name,
  placeholder,
  errorMessage
}) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="form-control"
        id="exampleInputEmail1"
        name={name}
        aria-describedby="emailHelp"
      />
      {showError && (<small className="text-danger">{errorMessage}</small>)}
    </div>
  );
};

export default Input;