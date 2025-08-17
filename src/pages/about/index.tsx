import { MainLayoutWithNoSSR } from '@components/Layout/Main';
import Image from 'next/image';
import { FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { Wrapper } from '../../components/Layout';
import Link from 'next/link';
import { IoIosMail, IoMdAddCircleOutline } from 'react-icons/io';

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
            <Image src={'/avatar/avatar9.jpg'} alt="Author" fill className="absolute rounded-full object-cover" />
          </div>
          <div className="px-4">
            <h3 className="text-left font-title font-bold text-2xl mb-2">Sam Do (Thuy Do Thi)</h3>
            <span className="text-left block">Web Developer</span>
          </div>
        </Wrapper>
        <p className="my-8">
          Hello! My name is Sam working from VietNam. I create some Ghost and Wordpress themes for differents
          markets, also, i offer live support via our ticket system.
        </p>
        <div className="flex items-center justify-center">
          <Link href={'mailto:dothuy302000@gmail.com'} passHref className="flex items-center mx-2">
            <IoIosMail  fontSize={'2rem'} color="#edd239" />
          </Link>
          <Link href={'https://www.instagram.com/dev._.dumb/'} passHref className="flex items-center mx-2">
            <FiInstagram fontSize={'1.5rem'} color="#ef00a2" />
          </Link>
          <Link href={'https://www.linkedin.com/in/thuysddoox/'} passHref className="flex items-center mx-2">
            <FaLinkedinIn fontSize={'1.5rem'} color="#175beb" />
          </Link>
        </div>
      </Wrapper>
    </MainLayoutWithNoSSR>
  );
};

export default AboutPage;
