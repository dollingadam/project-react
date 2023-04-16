import React from "react";
import { Link } from "react-router-dom";
import CardCats from "../components/CardCats";
import JustProp from "../components/JustProp";

import HomeSection from "../components/HomeSection";
function Home() {
  return (
    <div>
      <HomeSection />
      <JustProp title="Våra nyaste katter" />
      <CardCats />
    </div>
  );
}

export default Home;
