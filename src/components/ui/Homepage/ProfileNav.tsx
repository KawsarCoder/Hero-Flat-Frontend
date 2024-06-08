import { getUserInfo } from "@/services/auth-services";
import { Avatar } from "@mui/material";
import Link from "next/link";

function ProfileNav({ responsive }: { responsive: boolean }) {
  const userInfo = getUserInfo();
  return (
    <>
      {userInfo?.role && (
        <div
          className={`${
            responsive ? "md:hidden block mt-6" : "md:block hidden "
          }`}
        >
          <Link title="Go to Dashboard" href={`/dashboard/${userInfo?.role}`}>
            <Avatar
              sx={{ border: 3, borderRadius: 50, borderColor: "#BF83FC" }}
              src="/broken-image.jpg"
            />
          </Link>
        </div>
      )}
    </>
  );
}

export default ProfileNav;
