import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si';
import { Wrapper } from '../../components/Layout';
import { DEFAULT_DESCRIPTION } from '@utils/constants';

const AboutPage = () => {
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
            <Image src={'/avatar/avatar9.jpg'} alt="Author" fill className="absolute rounded-full " />
          </div>
          <div className="px-4">
            <h3 className="font-title font-bold text-2xl mb-2">Jonathan Doe</h3>
            <span className="text-center block">Founder & Editor</span>
          </div>
        </Wrapper>
        <p className="my-8">
          Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents
          markets, also, i offer live support via our ticket system.
        </p>
        <div className="flex items-center justify-center">
          <FaFacebookF fontSize={'1.5rem'} color="#175beb" className="mr-2" />
          <FiInstagram fontSize={'1.5rem'} color="#ef00a2" className="mx-2" />
          <SiZalo fontSize={'1.5rem'} color="#1da1f2" className="mx-2" />
        </div>
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};

export default AboutPage;
