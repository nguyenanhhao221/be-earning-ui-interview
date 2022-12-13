import { type NextPage } from "next";
import Head from "next/head";
import { NavigationButton } from "../components/NavigationButton";
import { User } from "../components/User";
import {
  BsBoxArrowDownLeft,
  BsBoxArrowUpRight,
  BsFillBellFill,
} from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Be Earning</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5">
        <div className="flex items-center justify-between">
          <User />
          <div className="flex gap-[6px]">
            <NavigationButton Icon={BsBoxArrowUpRight} />
            <NavigationButton Icon={BsBoxArrowDownLeft} />
            <NavigationButton Icon={BsFillBellFill} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;