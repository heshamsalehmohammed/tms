import React from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Balance = () => {
  const vacationTypes = [
    { name: "Casual", totalBalance: 6, availableBalance: 2 },
    { name: "Usual", totalBalance: 21, availableBalance: 20 },
    { name: "Sick Leave", totalBalance: null, availableBalance: null },
  ];
  const years = [2024, 2023, 2022];

  return (
    <>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={`Year: ${2024}`}
          menuVariant="dark"
        >
          {years.map((year, index) => (
            <NavDropdown.Item key={index} href={`#action/${index + 3}`}>
              {year}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vacation Type</th>
            <th>Total Balance</th>
            <th>Available Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vacationTypes.map((type, index) => (
            <tr key={index}>
              <td>{type.name}</td>
              <td>{type.totalBalance}</td>
              <td>{type.availableBalance}</td>
              <td>Request New Vacation</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Balance;
