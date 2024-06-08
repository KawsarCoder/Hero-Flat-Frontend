"use client";
import {
  useGetAllUsersQuery,
  useUpdateNormalUserInfoMutation,
} from "@/redux/api/usersApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import { toast } from "sonner";

function UserManagementPage() {
  const { data, isLoading, refetch } = useGetAllUsersQuery({});
  const [updateNormalUserInfo] = useUpdateNormalUserInfoMutation();

  const handleOnUpdate = async (
    id: string | undefined,
    role: string | undefined,
    status: string | undefined
  ) => {
    const payload = {
      id: id,
      body: {
        role: role,
        status: status,
      },
    };
    const res = await updateNormalUserInfo(payload).unwrap();
    await refetch();
    if (res?.id) {
      toast.success("Boss!!! you make it this...");
    }
  };

  const showToast = (
    status?: string | undefined,
    role?: string | undefined,
    id?: string
  ) => {
    toast("Are you sure to something make it happen.?", {
      action: {
        label: "Yes",
        onClick: () => handleOnUpdate(id, role, status),
      },
    });
  };
  return (
    <section>
      <CommonDashboardHeaderTitle
        mainTitle="User Management"
        secondaryTitle="You can manage all user"
      />

      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs mt-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-black font-Ubuntu text-center uppercase border-b bg-purple-300 ">
                <th className="px-4 py-3">Sl No</th>
                <th className="px-4 py-3">Name</th>

                <th className="px-4 py-3">E-mail</th>
                <th className="px-4 py-3">Contact Number</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Change Status</th>
                <th className="px-4 py-3">Change Role</th>
              </tr>
            </thead>
            {!isLoading ? (
              data?.map((item: any, index: number) => (
                <tbody
                  key={item?.id}
                  className="bg-white divide-y text-center divide-gray-800 font-Ubuntu "
                >
                  <tr className="text-gray-800">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-center">{index + 1}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-center">
                            {item?.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm">{item?.email}</td>
                    <td className="px-4 py-3 text-sm">{item?.contactNumber}</td>
                    <td className="px-4 py-3 text-xs">
                      <span
                        className={`px-2 py-1 text-xs font-semibold ${
                          item?.user?.status === "ACTIVE"
                            ? "bg-green-500"
                            : "bg-red-500"
                        } leading-tight text-white rounded-md `}
                      >
                        {item?.user?.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <button
                          onClick={() =>
                            showToast("ACTIVE", undefined, item?.id)
                          }
                          disabled={
                            item?.user?.status === "ACTIVE" ? true : false
                          }
                          className={`px-2 py-1 ${
                            item?.user?.status === "ACTIVE"
                              ? "bg-green-200 text-green-500"
                              : "bg-green-500 text-white"
                          } rounded-md font-bold text-xs `}
                        >
                          ACTIVE
                        </button>
                        <button
                          onClick={() =>
                            showToast("BLOCKED", undefined, item?.id)
                          }
                          disabled={
                            item?.user?.status === "BLOCKED" ? true : false
                          }
                          className={`px-2 py-1 ${
                            item?.user?.status === "BLOCKED"
                              ? "bg-red-100 text-red-400"
                              : "bg-red-200 text-red-700"
                          } rounded-md text-xs `}
                        >
                          BLOCKED
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <button
                          onClick={() =>
                            showToast(undefined, "ADMIN", item?.id)
                          }
                          disabled={item?.user?.role === "ADMIN" ? true : false}
                          className={`px-2 py-1  ${
                            item?.user?.role === "ADMIN"
                              ? "bg-purple-400 text-gray-100"
                              : "bg-purple-600 text-gray-100"
                          } rounded-md bg-purple-600 text-xs`}
                        >
                          Make Admin
                        </button>
                        <button
                          onClick={() => showToast(undefined, "USER", item?.id)}
                          disabled={item?.user?.role === "USER" ? true : false}
                          className={`px-2 py-1  ${
                            item?.user?.role === "USER"
                              ? "bg-purple-200"
                              : "bg-purple-600 text-white"
                          } rounded-md   text-xs`}
                        >
                          Make User
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </table>
        </div>
        <nav
          className="flex items-center flex-column mt-2 mb-2 flex-wrap md:flex-row justify-between"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal pl-4 text-gray-800 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            <span className="font-semibold text-gray-900 ">1-10</span> of{" "}
            <span className="font-semibold text-gray-900 ">1000</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border  rounded-s-lg hover:bg-gray-100 hover:text-gray-800   border-gray-700   "
              >
                Pre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 border bg-purple-600 hover:text-gray-200 border-gray-700 text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border  rounded-e-lg hover:bg-gray-100 hover:text-gray-700 border-gray-700   "
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default UserManagementPage;
