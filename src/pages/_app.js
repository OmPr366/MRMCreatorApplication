import "../styles/globals.css";
import Store from "../utils/Redux/Store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>

      <Component {...pageProps} />
    </Provider>
  );
}
