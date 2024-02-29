import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/signUp/SignUp";
import { SignIn } from "./pages/signIn/SignIn";
import { motion, AnimatePresence } from "framer-motion";
import ShowProducts from "./pages/showProducts/ShowProducts";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter={false}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <AnimatedRoute>
                <Home />
              </AnimatedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AnimatedRoute>
                <SignUp />
              </AnimatedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <AnimatedRoute>
                <SignIn />
              </AnimatedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <AnimatedRoute>
                <ShowProducts />
              </AnimatedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
