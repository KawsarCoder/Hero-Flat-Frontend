import { UserRole } from "@/types";

import { getUserInfo } from "@/services/auth-services";
import { GenerateDrawerItems } from "@/utils/DrawerItmes";
import { Box, Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBarItems from "./SideBarItems";

function SideBar() {
  const [userRole, setUserRole] = useState("");
  const { role } = getUserInfo();

  useEffect(() => {
    setUserRole(role);
  }, [role]);
  return (
    <Box>
      <Stack
        sx={{
          py: 2.8,
          background: "#F6F5F2",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
         */}
        <h1 className=" font-bold text-3xl font-Ubuntu text-purple-600">
          Hero Flat
        </h1>
      </Stack>
      <Divider />
      <List>
        {GenerateDrawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
      <Divider />
    </Box>
  );
}

export default SideBar;
