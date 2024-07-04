import { useState } from "react";
import { Outlet } from "react-router-dom";
import ExploreMenu from "./../components/ExploreMenu/ExploreMenu";
import "./BaseLayout.css";

const BaseLayout = () => {
  const [category, setCategory] = useState("All");

  return (
    <main className="page-wrapper">
      <div className="sidebar">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <div className="content-wrapper">
        <Outlet context={{ category }} />
      </div>
    </main>
  );
};

export default BaseLayout;
