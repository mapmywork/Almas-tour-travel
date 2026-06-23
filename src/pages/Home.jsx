import React from 'react';
import Hero from '../components/hero/Hero';
import Destinations from '../components/destinations/Destinations';
import TourPackages from '../components/packages/TourPackages';
import RentalFleet from '../components/fleet/RentalFleet';
import WhyChooseUs from '../components/common/WhyChooseUs';
import Testimonials from '../components/testimonials/Testimonials';
import BookingProcess from '../components/booking/BookingProcess';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Destinations />
      <TourPackages />
      <RentalFleet />
      <WhyChooseUs />
      <BookingProcess />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
