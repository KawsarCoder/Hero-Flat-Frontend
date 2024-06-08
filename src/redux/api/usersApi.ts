import { tagTypes } from "@/redux/tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (userData) => ({
        url: `${USER_URL}/create-user`,
        method: "POST",
        data: userData,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    getAllUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/users/`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.users],
    }),
    updateNormalUserInfo: build.mutation({
      query: (data: Record<string, any>) => {
        return {
          url: `/users/normal-user-info/${data.id}`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    getUserById: build.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
  }),
  // forgotPassword: build.mutation({
  //   query: (data) => ({
  //     url: `${AUTH_URL}/forgot-password`,
  //     method: "POST",
  //     data: data,
  //   }),
  //   invalidatesTags: [tagTypes.user],
  // }),
  // resetPassword: build.mutation({
  //   query: (data) => ({
  //     url: `${AUTH_URL}/reset-password`,
  //     method: "POST",
  //     data: data,
  //   }),
  //   invalidatesTags: [tagTypes.user],
  // }),
});

export const {
  useCreateUserMutation,
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useUpdateNormalUserInfoMutation,
} = usersApi;
