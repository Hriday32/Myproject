import React from "react";
import HeroSection from "../components/Hero Section/HeroSection";
import FacilitiesSection from "../components/Facilities section/FacilitiesSection";
import BestRentalService from "../components/Best rental service/BestRentalService";
import RentalFleets from "../components/Rental fleets/RentalFleets";
import AdsBanner from "../components/Ads Banner Section/AdsBanner";
import MissionSection from "../components/Mission Section/MissionSection";
import NewestCar from "../components/Newest car fleet/NewestCar";
import Reviews from "../components/Reviews/Reviews";

function Home() {
  return (
    <div>
      <HeroSection />
      <FacilitiesSection />
      <BestRentalService />
      <RentalFleets />
      <AdsBanner />
      <MissionSection />
      <NewestCar />
      <Reviews />
    </div>
  );
}

export default Home;
