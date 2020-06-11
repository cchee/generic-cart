import * as React from "react";

export interface NavBarProps {
  totalCounters: number;
  totalPrice: number;
}

export const NavBar: React.FC<NavBarProps> = props => {
  return (
    <nav className="navbar navbar-light by-light">
      <button className="navbar-brand">
        <div className="badge m-2">
          No. of Selected Product: {props.totalCounters}
        </div>
        <div className="badge m-2">Total Price (USD): ${props.totalPrice}</div>
      </button>
    </nav>
  );
};
