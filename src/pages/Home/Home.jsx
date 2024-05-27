import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplays from "../../components/FoodDisplays/FoodDisplays";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, seCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} seCategory={seCategory} />
      <FoodDisplays category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
