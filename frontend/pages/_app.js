import { Provider } from "react-redux";

import store from '../redux/store/store'


import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      </Provider>

    </>
  );
}