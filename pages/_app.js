import "@/styles/globals.css";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";
import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

