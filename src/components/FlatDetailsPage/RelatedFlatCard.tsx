import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import Image from "next/image";
import Link from "next/link";

function RelatedFlatCard({ role }: { role: string }) {
  const { data, isLoading } = useGetAllFlatsQuery({});

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {!isLoading ? (
          data?.slice(0, 4).map((item: any) => (
            <div
              key={item?.id}
              className="relative mt-4 flex w-full mx-auto duration-300 max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <button className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <Image
                  height={500}
                  width={400}
                  className="object-cover object-center"
                  src={item?.flatPhoto[1]}
                  alt="product image"
                />
              </button>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="sm:text-base text-sm flex items-center gap-1 font-Ubuntu tracking-tight text-slate-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {item?.location}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-xl sm:text-2xl font-Lora font-bold text-slate-900">
                      {item?.description}
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <Link href={`/dashboard/${role}/flat-share-request`}>
                    <button className="flex items-center justify-center shadow-md sm:px-3 sm:py-2 px-3 py-2 bg-purple-400 text-white text-xs sm:text-sm uppercase font-medium rounded hover:bg-purple-600 duration-300 focus:outline-none">
                      Request flat
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </>
  );
}

export default RelatedFlatCard;
