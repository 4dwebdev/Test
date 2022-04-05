import React from "react";

const Sisense = window.Sisense;
Sisense.connect("https://dashboard.artba.org/") // replace with your Sisense server address
  .then((app) => {
    app.dashboards
      .load("62210c55ca7c6135304be306") //replace with your dashboard id
      .then((dash) => {
        dash.widgets.get("62210c55ca7c6135304be306").container =
          document.getElementById("widget1"); //replace with one of your widgets' id.
        dash.renderFilters(document.getElementById("filters"));
        dash.refresh();
      })
      .catch((e) => {
        console.error(e);
      });
  })
  .catch((e) => {
    console.error(e);
  });
function Dash() {
  return (
    <>
      <div id="sisenseApp">
        <div
          id="widget1"
          style={{ height: 400, width: 35}}
        ></div>
      </div>
    </>
  );
}
export default Dash;
