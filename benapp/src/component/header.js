import React from "react";
// or less ideally

function Header() {
  return (
    <header className="navebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-content">
              <div className="header-content-inner">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
