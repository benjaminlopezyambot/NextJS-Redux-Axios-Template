import store from "@/store/store";
import "@/styles/globals.css";
import darkTheme from "@/styles/theme/darkTheme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
