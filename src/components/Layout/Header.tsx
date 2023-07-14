import type { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
        <Typography color="primary.main">Mrafei&apos;s Portfolio</Typography>
      </Link>

      <Link href="https://github.com/mrafei">
        <Typography>GitHub</Typography>
      </Link>
    </Box>
  );
};
export default LayoutHeader;
