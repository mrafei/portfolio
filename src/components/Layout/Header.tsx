import type { FC } from "react";
import Link from "next/link";

const LayoutHeader: FC = () => {
  return (
    <div className="flex p-3 justify-between items-center">
      <Link href="/">
        <span className="flex items-center text-cyan-400 text-xl font-bold">
          Mrafei's Portfolio
        </span>
      </Link>

      <Link target="_blank" href="https://github.com/mrafei">
        <span>GitHub</span>
      </Link>
    </div>
  );
};
export default LayoutHeader;
