import { createBrowserRouter } from "react-router-dom";
import { SCREEN_NAMES } from "./constants";
import Dashboard from "../pages/dashboard";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import BankWithdrawals from "../pages/dashboard/bank-withdrawal";
import CryptoWithdrawal from "../pages/dashboard/crypto-withdrawal";

const Router = createBrowserRouter([
  {
    path: SCREEN_NAMES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: SCREEN_NAMES.HOME,
    element: <Dashboard />,
  },
  {
    path: SCREEN_NAMES.REGISTER,
    element: <SignupPage />,
  },
  {
    path: SCREEN_NAMES.BANK_WITHDRAWAL,
    element: <BankWithdrawals />,
  },
  {
    path: SCREEN_NAMES.CRYPTO_WITHDRAWAL,
    element: <CryptoWithdrawal />,
  },
]);

export default Router;
