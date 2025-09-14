import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import { ThemeColorContext, ThemeColorContextIProps } from '@utils/contexts/themeContext';
import Image from 'next/image';
import { useContext } from 'react';
import { Wrapper } from '../../components/Layout';
import Avatar from '@components/Avatar';

const AboutPage = () => {
  const { themeApp } = useContext(ThemeColorContext) as ThemeColorContextIProps;

  return (
    <MainLayoutWithNoSSR
      classFooter="block"
      description={'About dev_dumb, she is a web developer'}
      pageTitle="About dev_dumb"
      url={process.env.NEXT_PUBLIC_ROOT_URL + '/about'}
    >
      <Wrapper className="bg-content dark:bg-[#8dc4d1] mb-6 sm:mb-24 mt-24 sm:mt-20 p-12 border border-black rounded-md shadow-md text-center w-full sm:w-[80%] mx-auto">
        <Wrapper className="flex items-center justify-center">
          <Avatar className="w-28 h-28"
            name={
              <h3 className=" mx-4 text-left font-title font-bold text-2xl mb-2">Sam Doo</h3>
            }
            title={
              <span className="mx-4 text-left block">Web Developer</span>
            }
          />
        </Wrapper>
        <p className="my-8">
          "Hello, My name is Thuy Do Thi, you can call me Sam, a web developer from Vietnam. Welcome to here! This blog is a personal space where I share my thoughts and experiences about web development, along with bits of everyday life.<br/>The knowledge I share here comes from my own learning, practice and experiences, so it may not always be perfect — just my perspective. So I’d be happy to hear your perspective and your sharing. Hopefully, you’ll still find something helpful or inspiring here."
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
