import React from "react";
import Nav from "react-bootstrap/Nav";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Balance from "./Balance/Balance";
import Requests from "./Requests/Requests";
import { Link } from "react-router-dom";
import "./Vacations.scss";

const Vacations = () => {
  const location = useLocation();
  return (
    <div className="vacations-container">
      <Nav
        variant="pills"
        defaultActiveKey="balance-link"
        activeKey={`${location.pathname.split("/").pop()}-link`}
      >
        <Nav.Item>
          <Nav.Link as={Link} to="balance" eventKey="balance-link">
            Balance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="requests" eventKey="requests-link">
            Vacation Requests
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Request New Vacation</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="vacations-container-tab-content mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="balance" />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </div>
    </div>
  );
};

export default Vacations;
