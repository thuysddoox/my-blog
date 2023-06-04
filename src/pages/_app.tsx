import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '@styles/globals.css';
import NextProgress from 'next-progress';
import type { AppProps } from 'next/app';
export const client = new ApolloClient({
  uri: 'https://api-ap-southeast-2.hygraph.com/v2/clhhvnrn91lwg01umdec6bzlu/master',
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextProgress delay={0} height={'3px'} color="#ff4c60" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
