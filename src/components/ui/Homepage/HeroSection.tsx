"use client";
import { getUserInfo } from "@/services/auth-services";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../assests/Home/HeroImage.svg";
function HeroSection() {
  const userInfo = getUserInfo();
  return (
    <section
      className="container mt-4 mx-auto bg-purple-100
     sm:h-[700px] h-[1000px] md:h-[1050px] lg:h-[920px] xl:h-[500px] rounded-md"
    >
      <div className="container mx-auto pt-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 px-10 md:px-16 gap-12 md:gap-16 md:py-5">
          <div
            data-aos="fade-right"
            className=" sm:text-center lg:text-left text-center"
          >
            <h1 className=" mt-2 font-Lora z-0">
              <span className="tracking-wider font-extrabold sm:text-5xl text-3xl leading-[1.4] text-purple-600 ">
                Connect With Hero Flat, Live in The Dream!
              </span>
            </h1>

            <p className=" font-Ubuntu text-[12px] md:text-[14px] mt-2 mb-6">
              Become a part of our community to discover the ideal Hero Flat
              that aligns with your lifestyle and preferences. Experience
              harmonious co-living with someone who truly complements your way
              of life. Embark on your journey towards an enhanced shared living
              experience today!
            </p>
            <Link
              className=" border py-1 px-1 inline-block justify-center items-center rounded-3xl mx-auto"
              href={`/dashboard/${userInfo?.role}/post-flat`}
            >
              <button className="active:scale-95 px-4 py-2 bg-purple-600 font-Lora text-white hover:bg-purple-800 rounded-3xl duration-300 shadow-md">
                Share Your Flat
              </button>
            </Link>
            <Link
              className="sm:ml-2 ml-1 mt-2 active:scale-95 duration-200 border py-1 px-1 inline-block justify-center items-center rounded-3xl mx-auto"
              href={"/all-flats"}
            >
              <button className=" px-4 py-2 bg-purple-400 font-Lora text-white hover:bg-purple-600 rounded-3xl duration-300 shadow-md">
                Explore More
              </button>
            </Link>
          </div>
          {/* hero Image */}
          <div className=" md:mt-10 mt-2 flex justify-end mx-auto sm:mx-0">
            <Image alt="Hero Image" src={heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
