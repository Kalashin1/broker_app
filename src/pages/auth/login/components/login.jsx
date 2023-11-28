import { useState } from "react";
import Input from "../../../../components/Input";
import { login } from "../../../../helper";
import {Link} from 'react-router-dom';
import {SCREEN_NAMES} from '../../../../navigation/constants'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, updateErrorMessage] = useState('')
  const [errorType, setErrorType] = useState('')
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false)


  const loginUser = async (e) => {
    e.preventDefault();
    updateErrorMessage('')
    setErrorType('')
    setisLoading(true);
    const [error, payload] = await login({ email, password });
    setisLoading(false);
    if (error) {
      alert('Error loggin in');
      console.log(error);
      setError(true)
      if (error.message.includes('auth/wrong-password')){
        setErrorType('password');
        updateErrorMessage('Incorrect password')
      }
      if (error.message.includes('auth/user-not-found')){
        setErrorType('email');
        updateErrorMessage('User not found')
      }
    }

    if (payload) {
      alert('login successful!');
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
            <form onSubmit={loginUser}>
              <Input
                errorMessage={errorMessage}
                handleChange={e => setEmail(e.target.value)}
                label={'Email'}
                placeholder={"Johndoe@gmail.com"}
                value={email}
                type="email"
                name="email"
                showError={errorType === 'email' && error}

              />
              <Input
                errorMessage={errorMessage}
                handleChange={e => setPassword(e.target.value)}
                label={'Password'}
                placeholder={"*****"}
                value={password}
                type="password"
                name="password"
                showError={errorType === 'password' && error}

              />
              
             
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
              >
                {isLoading? 'loading...' : ('Sign In')}
              </button>
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-bold">New to LPM?</p>
                <Link
                  to={SCREEN_NAMES.REGISTER}
                  className="text-primary fw-bold ms-2"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
