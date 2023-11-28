import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../../../../components/Input";
import { SCREEN_NAMES } from "../../../../navigation/constants";
import { createAccount } from "../../../../helper";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, updateErrorMessage] = useState("");
  const [errorType, setErrorType] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);


  const createUserAccount = async (e) => {
    e.preventDefault();
    setisLoading(true);
    updateErrorMessage('')
    setErrorType('')
    const [error, payload] = await createAccount({
      name,
      email,
      password
    });
    setisLoading(false);
    if (error) {
      alert('Error creating account')
      console.log(error)
      setError(true)
      if (error.includes('email-already-in-use')){
        setErrorType('email')
        updateErrorMessage('Email already in use')
      }
      if (error.includes('weak-password')){
        setErrorType('password')
        updateErrorMessage('Password too weak! 8 Characters expected')
      }
    }

    if (payload) {
      location.assign(SCREEN_NAMES.HOME)
    }
  }
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
            <p className="text-center">Your Social Campaigns</p>
            <form onSubmit={createUserAccount}>
              <Input
                placeholder="John Doe"
                label="Name"
                value={name}
                handleChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                label="Email"
                placeholder="johndoe@gmail.com"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                errorMessage={errorMessage}
                showError={error && errorType === "email"}
              />
              <Input
                type="password"
                label="Password"
                placeholder="****"
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
                errorMessage={errorMessage}
                showError={error && errorType === "password"}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
              >
                {isLoading ? 'loading...': ('Sign Up')}
              </button>
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                <Link
                  className="text-primary fw-bold ms-2"
                  to={SCREEN_NAMES.LOGIN}
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
