import Footer from '@components/Footer';
import Header from '@components/Header';
import OtherOfFooter from '@components/OtherOfFooter';
import { DEFAULT_DESCRIPTION } from '@utils/constants';
import MessageProvider from '@utils/contexts/messageContext';
import ThemeProvider from '@utils/contexts/themeContext';
import ScrollToTop from '@utils/lib/ScrollToTop';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainLayout = ({
  children,
  pageTitle,
  hasOtherOfFooter = false,
  classFooter = 'hidden',
  description,
  url,
}: {
  children: React.ReactElement | React.ReactNode;
  pageTitle?: string;
  description?: string;
  hasOtherOfFooter?: boolean;
  classFooter?: string;
  url?: string;
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        {DEFAULT_DESCRIPTION?.map((item, id) => (
          <meta property="og:description" content={item} key={id}/>
        ))}
        <meta property="og:url" content={url} />
        <meta property="og:url" content={url} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <title>{pageTitle}</title>
      </Head>
      <ThemeProvider>
        <main className="z-10 container mx-auto lg:p-4 min-h-[calc(100vh_-_57px)]">
          <Header />
          <MessageProvider>
            <div className="sm:mx-4">{children}</div>
          </MessageProvider>
        </main>
        <ScrollToTop />
        <footer className="bg-content dark:bg-[#8dc4d1]">
          <OtherOfFooter className={classFooter} />
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
};

export const MainLayoutWithNoSSR = dynamic(() => import('../Main'), { ssr: false });
export default MainLayout;
