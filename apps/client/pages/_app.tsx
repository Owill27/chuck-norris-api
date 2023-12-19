import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { AppProps } from 'next/app';
import { useMemo } from 'react';
import { ThemeProvider } from 'next-themes';
import { Onest, Bricolage_Grotesque, Inclusive_Sans } from 'next/font/google';

import '../styles/gloabal.less';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined = undefined;

function createApolloClient() {
  const link: string = process.env.API_URL || 'http://localhost:4000';

  return new ApolloClient({
    uri: link as string,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

const font = Onest({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  const client = useMemo(() => initializeApollo(), []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
