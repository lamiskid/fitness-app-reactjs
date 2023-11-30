// Routes.js
import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoginPage from "./../component/SignIn/SignIn";
import RegisterPage from "./../component/SignUp/SignUp";
import ResetPasswordPage from "./../component/ChangePassword/ChangePassword";
import ForgotPassword from "./../component/ForgetPassword/ForgetPassword";

const pageTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -150 },
};
const loginPageTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 150 },
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={
            <AnimatePresence exitBeforeEnter={false}>
              <motion.div
                key="login"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={loginPageTransition}
              >
                <LoginPage />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="register"
          element={
            <AnimatePresence exitBeforeEnter={false}>
              <motion.div
                key="register"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <RegisterPage />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="ForgotPassword"
          element={
            <AnimatePresence exitBeforeEnter={false}>
              <motion.div
                key="reset-password"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <ForgotPassword />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="resetPassword"
          element={
            <AnimatePresence exitBeforeEnter={false}>
              <motion.div
                key="reset-password"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
              >
                <ResetPasswordPage />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
