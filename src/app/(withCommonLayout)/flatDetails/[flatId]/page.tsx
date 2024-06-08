"use client";
import RelatedFlatCard from "@/components/FlatDetailsPage/RelatedFlatCard";
import { useGetFlatByIdQuery } from "@/redux/api/flatApi";
import { getUserInfo } from "@/services/auth-services";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import StraightenIcon from "@mui/icons-material/Straighten";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ChairIcon from "@mui/icons-material/Chair";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  params: {
    flatId: string;
  };
};
function FlatDetailPage({ params }: TProps) {
  const { flatId } = params;
  const { data, isLoading } = useGetFlatByIdQuery(flatId);
  const { role } = getUserInfo();

  return (
    <>
      {!isLoading ? (
        <main className="my-8">
          <div className="container mx-auto px-6">
            <div className=" rounded-md overflow-hidden bg-cover bg-center grid grid-cols-3 gap-6">
              <div className="flex items-center h-full shadow-md justify-between bg-purple-200 p-6">
                <div className=" max-w-xl">
                  <div
                    className="w-40 h-40 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url('${data?.flatPhoto[0]}')` }}
                  ></div>
                  <h2 className="sm:text-3xl text-xl font-semibold font-Lora pt-4">
                    Living With Present...
                  </h2>
                  <p className="mt-2 text-gray-500 sm:text-base text-xs font-normal font-Ubuntu">
                    {data?.description}
                  </p>

                  <Link href={`/dashboard/${role}/flat-share-request`}>
                    <button className="flex items-center mt-4 sm:px-4 sm:py-3 px-3 py-2 text-xs sm:text-sm uppercase font-medium rounded hover:bg-purple-400 border-purple-400 hover:text-white text-purple-600 border-2 focus:outline-none duration-500">
                      <h4 className="font-bold">Request flat</h4>
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
                </div>
              </div>
              <div className="w-full rounded-md">
                <div className="flex items-center h-full shadow-md justify-between bg-purple-100 p-6">
                  <div className="px-6">
                    <div
                      className="w-40 h-40 bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url('${data?.flatPhoto[1]}')`,
                      }}
                    ></div>
                    <h2 className="sm:text-3xl text-xl font-semibold mt-2 font-Lora">
                      Remember The Story
                    </h2>
                    <p className="mt-2 text-gray-500 font-Ubuntu sm:text-base text-xs">
                      {data?.utilitiesDescription}
                    </p>
                    <button className="flex items-center mt-4 sm:px-4 sm:py-3 px-3 py-2 text-xs sm:text-sm uppercase font-medium rounded hover:bg-purple-400 border-purple-400 hover:text-white text-purple-600 border-2 focus:outline-none duration-500">
                      <span className="font-bold">Visit More</span>
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
                  </div>
                </div>
              </div>
              <div className=" mt-8 md:mx-4 rounded-md md:mt-0">
                <div className="flex items-center h-full shadow-md justify-between bg-purple-100 p-6">
                  <div className="px-10 max-w-xl">
                    <div
                      className="w-40 h-40 bg-contain bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url('${data?.flatPhoto[2]}')`,
                      }}
                    ></div>
                    <h2 className="sm:text-3xl text-xl font-semibold font-Lora mt-2">
                      {" "}
                      See This Amazing way
                    </h2>
                    <p className="mt-2 text-gray-500 font-Ubuntu text-xs sm:text-base">
                      {data?.description}
                    </p>
                    <button className="flex items-center mt-4 sm:px-4 sm:py-3 px-3 py-2 text-xs sm:text-sm uppercase font-medium rounded hover:bg-purple-400 border-purple-400 hover:text-white text-purple-600 border-2 focus:outline-none duration-500">
                      <span className="font-bold">Share Happiness</span>
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
                  </div>
                </div>
              </div>
            </div>

            {/* About Section first counting others section card         */}
            <div className=" mt-8">
              <h1 className=" sm:text-3xl text-xl text-gray-800 font-semibold font-Lora">
                Flat details
              </h1>
              <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6 mx-auto">
                <div className="grid justify-center justify-items-center p-4 bg-purple-100 rounded-md shadow-sm">
                  <div className="p-3 size-12 text-white bg-purple-600 rounded-full text-center">
                    <SingleBedIcon />
                  </div>
                  <div>
                    <p className="text-lg font-semibold font-Ubuntu">
                      {"Total Rooms"}
                    </p>
                    <p className="text-xl font-Lora font-semibold text-center">
                      {data?.totalRooms}
                    </p>
                  </div>
                </div>
                <div className="grid justify-items-center p-4 bg-purple-100 rounded-md shadow-sm">
                  <div className="p-3 size-12 text-white bg-purple-600 rounded-full ">
                    <StraightenIcon />
                  </div>
                  <div>
                    <p className="sm:text-lg text-lg font-semibold font-Ubuntu text-center">
                      {"Square Feet"}
                    </p>
                    <p className="text-xl font-Lora font-semibold text-center">
                      {data?.squareFeet}
                    </p>
                  </div>
                </div>
                <div className="grid justify-items-center p-4 bg-purple-100 rounded-md shadow-sm">
                  <div className="p-3 size-12 text-white bg-purple-600 rounded-full text-center">
                    <LocalAtmIcon />
                  </div>
                  <div>
                    <p className="sm:text-lg text-lg font-semibold font-Ubuntu ">
                      {"Rent Price"}
                    </p>
                    <p className="text-xl font-Lora font-semibold">
                      $ {data?.rent}
                    </p>
                  </div>
                </div>
                <div className="grid justify-center justify-items-center p-4 bg-purple-100 rounded-md shadow-sm">
                  <div className="p-3 flex justify-center size-12 text-white bg-purple-600 rounded-full text-center">
                    <ChairIcon />
                  </div>
                  <div>
                    <p className="sm:text-lg text-lg font-semibold font-Ubuntu">
                      {"Total Bedrooms"}
                    </p>
                    <p className="text-xl font-Lora font-semibold text-center">
                      {data?.totalBedrooms}
                    </p>
                  </div>
                </div>
              </div>

              {/* About Section first counting others section card end*/}
              {/* About Section Details info card start*/}
              <div className="container mx-auto">
                <div className="grid grid-cols-2 bg-purple-100 p-10 rounded-lg">
                  <div
                    className="bg-no-repeat bg-contain bg-center"
                    style={{
                      backgroundImage: `url('${data?.flatPhoto[1]}')`,
                    }}
                  ></div>

                  <div className="w-full px-4">
                    <div className=" grid grid-cols-2">
                      <div className="w-full px-4">
                        <div className="flex flex-col rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-600 text-white ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                                <path
                                  fillRule="evenodd"
                                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                                  clipRule="evenodd"
                                />
                                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Lora">
                              Utilities Description
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-Ubuntu sm:text-sm text-xs">
                              {data?.utilitiesDescription}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col min-w-0 rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-600 text-white ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Lora">
                              Flat Location
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-Ubuntu sm:text-sm text-xs">
                              {data?.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0  rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-600 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Lora">
                              Amenities
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-Ubuntu sm:text-sm text-xs">
                              {data?.amenities}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col cursor-pointer hover:translate-y-1 duration-300 min-w-0 rounded-md">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-600 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h6 className="sm:text-xl text-lg mb-1 font-semibold font-Lora">
                              Description
                            </h6>
                            <p className="mb-4 text-gray-700 font-normal font-Ubuntu sm:text-sm text-xs">
                              {data?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <Link href={`/dashboard/${role}/flat-share-request`}>
                    {" "}
                    <button className="flex items-center justify-center shadow-md mt-6 sm:px-4 sm:py-3 px-3 py-2 bg-purple-600 text-white text-xs sm:text-sm uppercase font-medium rounded hover:bg-purple-500 duration-300 focus:outline-none ">
                      <span>Request For The flat</span>
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
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="sm:text-3xl text-xl text-gray-800 font-semibold font-Lora">
                See the more related flats
              </h3>

              <RelatedFlatCard role={role} />
            </div>
          </div>
        </main>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default FlatDetailPage;
