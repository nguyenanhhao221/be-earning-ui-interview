import { type AppType } from "next/dist/shared/lib/utils";
import { Headers } from "../components/Headers";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <html data-theme="light">
        <Headers />
        <Component {...pageProps} />
      </html>
    </>
  );
};

export default MyApp;
