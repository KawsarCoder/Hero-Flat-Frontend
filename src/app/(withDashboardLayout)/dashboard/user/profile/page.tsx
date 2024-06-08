"use client";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth-services";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import KawsarImg from "../../../../../assests/info/Kawsar.png";
import ProfileUpdateModal from "./components/ProfileUpdateModal";

function UserProfileCard() {
  const { role } = getUserInfo();
  const { data, isLoading, refetch } = useGetMyProfileQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateProfile] = useUpdateProfileMutation();
  const [file, setSelectedFile] = useState<string | Blob>("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: any) => {
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);

    if (selectedFile) {
      const cloudName = "daflbrxge";
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "l6iizscq");
      formData.append("cloud_name", cloudName);

      try {
        setUploading(true);
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );
        const profilePhotoInfo = {
          profilePhoto: response?.data?.secure_url,
        };

        const res = await updateProfile(profilePhotoInfo).unwrap();
        if (res?.id) {
          toast.success("Your profile image is uploaded successfully");
        }
        await refetch();
        setUploading(false);
      } catch (error) {
        console.log(error);

        setUploading(false);
      }
    } else {
      toast.info("Please select an image file to upload");
    }
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mx-auto max-w-242.5">
              <div className="overflow-hidden rounded-lg bg-sky-50">
                <div className="relative z-20 h-35 md:h-65">
                  <div className="flex justify-end mt-2 sm:mt-3 mr-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="font-poppins sm:text-sm text-xs font-bold bg-sky-400 hover:bg-sky-600 sm:px-4 sm:py-2 py-2 px-3 rounded-md text-white"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="px-4 text-center mt-20">
                  <div className="relative z-30 mx-auto w-full sm:max-w-44 sm:p-3">
                    <div className="relative bottom-24">
                      <Image
                        height={600}
                        width={600}
                        src={data?.profilePhoto || KawsarImg}
                        alt="Profile Image"
                        className="rounded-full h-[85px] w-20 sm:h-[160px] sm:w-40 border-sky-600 sm:border-8 border-2"
                      />
                      <label
                        htmlFor="profile"
                        className="absolute -bottom-3 right-36 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-opacity-90 sm:bottom-2 sm:right-2 bg-purple-600 p-2"
                      >
                        <svg
                          className="fill-current size-4 sm:size-6 text-white"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                            fill=""
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                            fill=""
                          />
                        </svg>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          name="profile"
                          id="profile"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="relative bottom-20">
                    <h3 className="sm:text-3xl text-xl font-semibold font-Kanit text-black ">
                      {data?.name}
                    </h3>
                    <p className="font-medium font-poppins text-lg text-gray-700">
                      {data?.profession || "Coming soon..."}
                    </p>
                    <p className="font-bold font-poppins text-lg mt-1 text-purple-600 ">
                      @{data?.username}
                    </p>

                    <div className="mx-auto max-w-180 mt-10">
                      <h3 className="font-semibold font-Kanit text-2xl text-black ">
                        About Me
                      </h3>
                      <p className="mt-4.5 text-sm font-normal w-full sm:w-96 mx-auto text-center font-poppins">
                        {data?.bio || "Coming soon..."}
                      </p>
                    </div>
                    <div className=" max-w-[660px] mx-auto shadow-lg overflow-hidden sm:rounded-lg rounded-md mt-10">
                      <div className="px-4 py-5 sm:px-6 bg-purple-100">
                        <h1 className="text-center text-2xl font-semibold font-Kanit">
                          Personal information
                        </h1>
                      </div>
                      <div>
                        <dl>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
                            <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                              Full name
                            </dt>
                            <dd className="mt-1 text-xl font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.name}
                            </dd>
                          </div>
                          <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="sm:text-xl text-xl font-medium font-Kanit text-gray-800">
                              Role
                            </dt>
                            <dd className="mt-1 text-md font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.user?.role}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
                            <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                              Email Address
                            </dt>
                            <dd className="mt-1 text-xl font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.email}
                            </dd>
                          </div>

                          <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                              Contact
                            </dt>
                            <dd className="mt-1 text-xl font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.contactNumber}
                            </dd>
                          </div>
                          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                              Address
                            </dt>
                            <dd className="mt-1 text-xl font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.address || "Coming soon..."}
                            </dd>
                          </div>
                          <div className="bg-purple-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="sm:text-xl text-lg font-medium font-Kanit text-gray-800">
                              Profession
                            </dt>
                            <dd className="mt-1 text-xl font-medium font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.profession || "Coming soon..."}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-white">
                            <dt className="sm:text-lg text-sm font-medium font-Kanit text-gray-800">
                              About
                            </dt>
                            <dd className="mt-1 text-xl font-poppins text-gray-900 sm:mt-0 sm:col-span-2">
                              {data?.bio || "Coming soon..."}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <ProfileUpdateModal
        refetch={refetch}
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
        data={data}
      />
    </>
  );
}

export default UserProfileCard;
