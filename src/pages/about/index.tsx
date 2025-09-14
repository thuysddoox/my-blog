import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import { ThemeColorContext, ThemeColorContextIProps } from '@utils/contexts/themeContext';
import Image from 'next/image';
import { useContext } from 'react';
import { Wrapper } from '../../components/Layout';

const AboutPage = () => {
     const { themeApp } = useContext(ThemeColorContext) as ThemeColorContextIProps;

  return (
    <MainLayoutWithNoSSR
      classFooter="block"
      description={'About dev_dumb, she is a web developer'}
      pageTitle="About dev_dumb"
      url={process.env.NEXT_PUBLIC_ROOT_URL + '/about'}
    >
      <Wrapper className="bg-content dark:bg-[#8dc4d1] mt-24 sm:mt-20 p-12 border border-black rounded-md shadow-md text-center w-full sm:w-[80%] mx-auto">
        <Wrapper className="flex items-center justify-center">
          <div className="w-28 h-28 rounded-full relative border border-black">
            <Image src={themeApp == 'dark' ? '/avatar/avatar11.jpg' : '/avatar/avatar12.jpg'} alt="Author" fill className="absolute rounded-full object-cover" />
          </div>
          <div className="px-4">
            <h3 className="text-left font-title font-bold text-2xl mb-2">Sam Do (Thuy Do Thi)</h3>
            <span className="text-left block">Web Developer</span>
          </div>
        </Wrapper>
        <p className="my-8">
          "Hello, I’m Sam, a web developer from Vietnam. Welcome to here! This blog is a personal space where I share my thoughts and experiences about web development, along with bits of everyday life. The knowledge I share here comes from my own learning and practice, so it may not always be perfect — just my perspective."
        </p>
        {/* <div className="flex items-center justify-center">
          <Link href={'mailto:dothuy302000@gmail.com'} passHref className="flex items-center mx-2">
            <IoIosMail  fontSize={'2rem'} color="#edd239" />
          </Link>
          <Link href={'https://www.instagram.com/dev._.dumb/'} passHref className="flex items-center mx-2">
            <FiInstagram fontSize={'1.5rem'} color="#ef00a2" />
          </Link>
          <Link href={'https://www.linkedin.com/in/thuysddoox/'} passHref className="flex items-center mx-2">
            <FaLinkedinIn fontSize={'1.5rem'} color="#175beb" />
          </Link>
        </div> */}
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};

export default AboutPage;
