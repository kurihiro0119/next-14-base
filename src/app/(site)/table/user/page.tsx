"use client"

import { UserTable } from "../_components/user/UserTable";
import Box from '@mui/material/Box';

const Page = async () =>
{
  return (
    <Box sx={{ p: 2 }}>
      <UserTable />
    </Box >
  )
}

export default Page