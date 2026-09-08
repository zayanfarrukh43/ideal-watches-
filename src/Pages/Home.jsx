import HeroSection from "../Component/Home/Herosection";
import LuxuryBrands from "../Component/Home/LuxuryBrands";
import NewArrival from "../Component/Home/NewArrival";
import HeritageSection from "../Component/Home/HeritageSection";
import PromotionalBanner from "../Component/Home/PromotionalBanner";
import NewsletterSection from "../Component/Home/NewsletterSection";
import ShopByStyle from "../Component/Home/ShopByStyle";
import { Video } from "lucide-react";
import VideoBanner from "../Component/Home/VideoBanner";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LuxuryBrands />
      <NewArrival />
      <ShopByStyle />
<VideoBanner />
       <HeritageSection />
      <PromotionalBanner />
      <NewsletterSection />
    </div>
  )
}

export default Home
