import { AppProps } from "next/app";

import { UiProvider } from "../../src/ui-provider";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </>
  );
}

export default CustomApp;
