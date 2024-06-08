import "./about.css";

import profile from "./assets/profile.png";
import Flat from "../../../assests/Home/flat.svg";

function AboutPage() {
  const aboutData = [
    {
      id: 1,
      title: "Personalized Matching",
      details:
        "Our advanced algorithm considers your lifestyle, interests, and preferences to pair you with the most compatible flatmates. This personalized approach ensures a harmonious living environment and minimizes potential conflicts.",
    },
    {
      id: 2,
      title: "Verified Listings",
      details:
        " We prioritize your safety and trust by verifying all listings. Our rigorous verification process ensures that each property is accurately represented, giving you peace of mind that what you see is what you get.",
    },
    {
      id: 3,
      title: "User-Friendly Platform",
      details:
        "Navigating our platform is straightforward and intuitive, making your search for a flat and flatmates quick and hassle-free. Our streamlined process saves you time and effort, getting you settled  into your new home faster.",
    },
    {
      id: 4,
      title: "Dedicated Support",
      details:
        " Our customer support team is always ready to assist you with any questions or issues. We are committed to providing prompt and helpful service to ensure your experience with HomeShare Haven is smooth and satisfying.",
    },
    {
      id: 5,
      title: "Flexible Options",
      details:
        "Whether you are looking for a short-term stay or a long-term arrangement, our platform offers flexible options to suit your needs. Filter listings based on your specific requirements and find a match that fits your lifestyle.",
    },
    {
      id: 6,
      title: "Secure Communication",
      details:
        "Our integrated messaging system allows you to communicate securely with potential flatmates and landlords. This feature makes it easy to ask questions, arrange viewings, and build a connection before moving in.",
    },
  ];
  return (
    <>
      {/* top section  */}
      <section>
        <div className="about-bg-image bg-cover bg-center bg-no-repeat">
          <div className="bg-black opacity-70 h-60 flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>
      </section>
      {/* about us detail section  */}
      <section className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-12 my-24 justify-center items-center md:mx-6 lg:mx-0">
          <div className="aboutDetailsImage w-full h-full rounded-2xl bg-center bg-no-repeat bg-cover col-start-1 col-end-13 md:col-end-5"></div>
          <div className="col-start-1 md:col-start-5 col-end-13 px-8 mt-12 lg:mt-0">
            <h3 className="text-3xl font-bold ">About Us Section</h3>
            <p className="text-lg my-4 text-justify">
              Welcome to Hero Flat! We connect you with like-minded flatmates
              for a harmonious living experience. Our platform offers
              personalized matching, verified listings, and easy communication.
              Find your perfect home and community with us. Your comfort and
              satisfaction are our priorities. Welcome home!
            </p>
            <span className="font-semibold block">
              Have questions or need assistance? Our friendly support team is
              here to help. Reach out to us anytime!
            </span>
            <button className="font-bold text-white mt-4 px-4 py-2 rounded-lg bg-purple-400 hover:bg-purple-600 delay-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      {/* why choose us  */}
      <section className="max-w-[1170px] mx-auto ">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-6 lg:mx-0 lg:grid-cols-3 mb-24 gap-4 text-white">
          {/* single card  */}
          {aboutData.map((data) => (
            <>
              <div className="text-center shadow-lg p-4 rounded-lg bg-purple-300 text-black">
                <h5 className="text-lg font-semibold ">{data.title}</h5>
                <p className="text-justify mt-1">{data.details}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
