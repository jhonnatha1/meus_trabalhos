import React from "react";
import Mesas from "./Mesas";
import Configs from "./Configs";
import Reservas from "./Reservas";

function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard do Admin</h2>

      <section>
        <Mesas />
      </section>

      <section>
        <Configs />
      </section>

      <section>
        <Reservas />
      </section>
    </div>
  );
}

export default Dashboard;
