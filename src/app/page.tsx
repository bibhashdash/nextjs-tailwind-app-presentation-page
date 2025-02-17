// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      {/*<Testimonials />*/}
      <Faqs />
      <Footer />
      {/*<img src="/image/promo1.png" alt="promo1" />*/}
    </>
  );
}
