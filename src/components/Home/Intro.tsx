import { FC } from "react";
import Image from "next/image";

const HomeIntro: FC = () => {
  return (
    <div className="px-3 py-6 flex flex-col items-center lg:flex-row lg:justify-between gap-10">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome! I&apos;m <span className="text-cyan-400">MRafei</span>
        </h1>
        <p className="mt-6 text-xl leading-9">
          Senior Frontend Engineer with <span className="text-cyan-400">6</span>{" "}
          years experience, Experienced at Front-end architecture design and
          building scalable Web Applications using various technologies such as{" "}
          <span className="text-cyan-400">Reactjs</span>,{" "}
          <span className="text-cyan-400">NextJS</span>,{" "}
          <span className="text-cyan-400">GraphQl</span>,{" "}
          <span className="text-cyan-400">NodeJS</span> and{" "}
          <span className="text-cyan-400">Python Django</span>.
        </p>
      </div>
      <div className="shrink-0">
        <Image
          src="/character.jpg"
          alt="front-end character"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default HomeIntro;
