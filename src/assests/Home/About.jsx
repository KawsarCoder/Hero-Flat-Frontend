import "./about.css";
import aboutImage from "./assets/aboutFlat.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import profile from "./assets/profile.png";

const About = () => {
  return (
    <>
      {/* top section  */}
      <section>
        <div className="about-bg-image">
          <div className="bg-black opacity-70 h-60 flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>
      </section>
      {/* about us detail section  */}
      <section className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-12 my-24 justify-center items-center md:mx-6 lg:mx-0">
          <div className="col-start-1 col-end-13 md:col-end-5">
            <img className="rounded-2xl" src={aboutImage} alt="about-image" />
          </div>
          <div className="col-start-1 md:col-start-5 col-end-13 px-8 mt-12 lg:mt-0">
            <h3 className="text-3xl font-bold ">About Us Section</h3>
            <p className="text-lg my-4 text-justify">
              Welcome to Flat Share! We connect you with like-minded flatmates
              for a harmonious living experience. Our platform offers
              personalized matching, verified listings, and easy communication.
              Find your perfect home and community with us. Your comfort and
              satisfaction are our priorities. Welcome home!
            </p>
            <span className="font-semibold block">
              Have questions or need assistance? Our friendly support team is
              here to help. Reach out to us anytime!
            </span>
            <button className="font-bold text-white mt-4 border-2 px-4 py-2 rounded-lg bg-[#ee9209]">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      {/* why choose us  */}
      <section className="max-w-[1170px] mx-auto ">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-6 lg:mx-0 lg:grid-cols-3 mb-24 gap-4 text-white">
          {/* card one  */}
          <div className="text-center border-2 p-4 rounded-lg bg-blue-700">
            <h5 className="text-lg font-semibold ">Personalized Matching</h5>
            <p className="text-justify mt-1">
              Our advanced algorithm considers your lifestyle, interests, and
              preferences to pair you with the most compatible flatmates. This
              personalized approach ensures a harmonious living environment and
              minimizes potential conflicts.
            </p>
          </div>
          {/* card two  */}
          <div className="text-center border-2 p-4 rounded-lg bg-green-600">
            <h5 className="text-lg font-semibold ">Verified Listings</h5>
            <p className="text-justify mt-1">
              We prioritize your safety and trust by verifying all listings. Our
              rigorous verification process ensures that each property is
              accurately represented, giving you peace of mind that what you see
              is what you get.
            </p>
          </div>
          {/* card three  */}
          <div className="text-center border-2 p-4 rounded-lg bg-yellow-600">
            <h5 className="text-lg font-semibold ">User-Friendly Platform</h5>
            <p className="text-justify mt-1">
              Navigating our platform is straightforward and intuitive, making
              your search for a flat and flatmates quick and hassle-free. Our
              streamlined process saves you time and effort, getting you settled
              into your new home faster.
            </p>
          </div>
          {/* card four  */}
          <div className="text-center border-2 p-4 rounded-lg bg-fuchsia-600">
            <h5 className="text-lg font-semibold ">Dedicated Support</h5>
            <p className="text-justify mt-1">
              Our customer support team is always ready to assist you with any
              questions or issues. We are committed to providing prompt and
              helpful service to ensure your experience with HomeShare Haven is
              smooth and satisfying.
            </p>
          </div>
          {/* card five  */}
          <div className="text-center border-2 p-4 rounded-lg bg-red-500">
            <h5 className="text-lg font-semibold ">Flexible Options</h5>
            <p className="text-justify mt-1">
              Whether you are looking for a short-term stay or a long-term
              arrangement, our platform offers flexible options to suit your
              needs. Filter listings based on your specific requirements and
              find a match that fits your lifestyle.
            </p>
          </div>
          {/* card six  */}
          <div className="text-center border-2 p-4 rounded-lg bg-teal-600">
            <h5 className="text-lg font-semibold ">Secure Communication</h5>
            <p className="text-justify mt-1">
              Our integrated messaging system allows you to communicate securely
              with potential flatmates and landlords. This feature makes it easy
              to ask questions, arrange viewings, and build a connection before
              moving in.
            </p>
          </div>
        </div>
      </section>
      {/* feedback section  */}
      <section className="max-w-[1170px] mx-auto mb-24">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="grid justify-items-center pb-12">
              <p className="px-4 text-justify">
                Working with Jubair was a fantastic experience. The team was
                professional, responsive, and delivered high-quality work on
                time and within budget. Their expertise and dedication exceeded
                my expectations. I highly recommend Jubair for any project
                needs.
              </p>
              <img className="w-16 h-16 mt-6" src={profile} alt="" />
              <h3 className="text-lg font-bold">MC Donalt</h3>
              <h6>XYZ Tech</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center pb-12">
              <p className="px-4 text-justify">
                Working with Jubair was a fantastic experience. The team was
                professional, responsive, and delivered high-quality work on
                time and within budget. Their expertise and dedication exceeded
                my expectations. I highly recommend Jubair for any project
                needs.
              </p>
              <img className="w-16 h-16 mt-6" src={profile} alt="" />
              <h3 className="text-lg font-bold">MC Donalt</h3>
              <h6>XYZ Tech</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center pb-12">
              <p className="px-4 text-justify">
                Working with Jubair was a fantastic experience. The team was
                professional, responsive, and delivered high-quality work on
                time and within budget. Their expertise and dedication exceeded
                my expectations. I highly recommend Jubair for any project
                needs.
              </p>
              <img className="w-16 h-16 mt-6" src={profile} alt="" />
              <h3 className="text-lg font-bold">MC Donalt</h3>
              <h6>XYZ Tech</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid justify-items-center pb-12">
              <p className="px-4 text-justify">
                Working with Jubair was a fantastic experience. The team was
                professional, responsive, and delivered high-quality work on
                time and within budget. Their expertise and dedication exceeded
                my expectations. I highly recommend Jubair for any project
                needs.
              </p>
              <img className="w-16 h-16 mt-6" src={profile} alt="" />
              <h3 className="text-lg font-bold">MC Donalt</h3>
              <h6>XYZ Tech</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default About;
