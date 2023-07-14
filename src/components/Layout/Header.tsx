import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const LayoutHeader: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
    >
      <Link href="/">
        <Typography color="primary.main">Mrafei's Portfolio</Typography>
      </Link>

      <Link href="https://github.com/mrafei">
        <Typography>GitHub</Typography>
      </Link>
    </Box>
  );
};
export default LayoutHeader;
