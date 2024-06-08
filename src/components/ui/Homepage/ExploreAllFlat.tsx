"use client";
import HomeSectionTitle from "@/components/shared/SectionTitle/HomeSectionTitle";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { getUserInfo } from "@/services/auth-services";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import HotTubIcon from "@mui/icons-material/HotTub";
import StraightenIcon from "@mui/icons-material/Straighten";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddCardIcon from "@mui/icons-material/AddCard";
import Image from "next/image";
import Link from "next/link";

function ExploreAllFlat() {
  const { data, isLoading } = useGetAllFlatsQuery({});
  const userInfo = getUserInfo();

  return (
    <section>
      <HomeSectionTitle
        mainTitle="Highlight Your Unique Destination"
        subTitle="Embrace a more relaxed and laid-back lifestyle, where stress melts away and tranquility takes over. Discover the joy of unwinding and savoring every moment..        ."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full mx-auto sm:px-4 px-6 mb-6">
        {!isLoading ? (
          <>
            {data?.map((item: any) => (
              <div key={item.id} className="relative mx-auto w-full ">
                <a href="#" className="relative inline-block w-full">
                  <div className="shadow-md p-4 rounded-lg bg-purple-200">
                    <div className="flex justify-center">
                      <Image
                        alt="Flat Photo"
                        height={200}
                        width={200}
                        src={item?.flatPhoto[0]}
                      />
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 mt-4">
                      <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                        <SingleBedIcon className="text-gray-600 mr-1 size-20" />
                        <div className="mt-2 xl:mt-0">
                          Total Rooms:
                          <span className="text-purple-600 font-bold">
                            {" "}
                            {item?.totalRooms}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                        <HotTubIcon className="text-gray-600 mr-1" />
                        <div className="mt-2 xl:mt-0">
                          Total Bedrooms:
                          <span className="text-purple-600 font-bold">
                            {item?.totalBedrooms}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex flex-col font-Ubuntu xl:flex-row xl:items-center text-gray-800">
                        <StraightenIcon className="text-gray-600 mr-1" />
                        <span className="mt-2 xl:mt-0">
                          Size:{" "}
                          <span className="text-purple-600 font-bold">
                            {item?.squareFeet}
                          </span>{" "}
                          sq. ft.
                        </span>
                      </div>
                      <div className="inline-flex xl:flex-row xl:items-center text-gray-800">
                        <AddCardIcon className="text-gray-600 mr-1" />
                        <div className="mt-2 xl:mt-0 font-Ubuntu text-sm">
                          Advanced:{" "}
                          <span className="text-purple-600 font-bold">
                            {" "}
                            {item?.advanceAmount}
                          </span>{" "}
                          $
                        </div>
                      </div>
                      <p className="inline-block text-primary">
                        <LocalAtmIcon className="text-gray-600" /> Rate:
                        <span className="text-lg font-bold text-purple-600">
                          {" "}
                          ${item?.rent}
                        </span>
                        /m
                      </p>
                      <p className="font-Lora text-xs sm:text-base text-gray-900 line-clamp-1 flex gap-2 items-center">
                        <LocationOnIcon className="text-gray-600" />
                        {item?.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 ">
                      <div className="flex items-center">
                        <Link
                          href={`/dashboard/${userInfo?.role}/flat-share-request`}
                        >
                          <button className="font-Ubuntu inline-flex px-3 py-2 rounded-lg bg-purple-400 text-sm font-medium text-white select-none hover:bg-purple-600 delay-300 ease-in">
                            Send Request
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </>
        ) : (
          <div>Loading..</div>
        )}
      </div>
      <Link
        className=" flex justify-center items-center mb-4"
        href={`/all-flats`}
      >
        <button className="flex items-center my-4 sm:px-4 sm:py-3 px-3 py-2 bg-purple-600 text-white text-xs sm:text-sm uppercase font-medium rounded-md duration-300 active:scale-90 focus:outline-none ">
          <span>Explore More Flats</span>
          <svg
            className="h-5 w-5 mx-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </Link>
    </section>
  );
}

export default ExploreAllFlat;
