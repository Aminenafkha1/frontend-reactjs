import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { _logoutUser } from "../../slices/authSlice";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";



const Userlayout = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(_logoutUser());
    history.push("/");
  };
  return (
    <div className="wrapper">
      <Header />

      <main className="mainContent">
         
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Userlayout;
