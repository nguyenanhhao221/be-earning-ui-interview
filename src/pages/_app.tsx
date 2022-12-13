import { type AppType } from "next/dist/shared/lib/utils";
import { Headers } from "../components/Headers";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <div data-theme="cupcake">
        <Headers />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
