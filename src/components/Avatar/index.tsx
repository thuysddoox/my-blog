import { Wrapper } from '@components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Avatar = () => {
  return (
    <Wrapper className="flex items-center justify-center xl:justify-start flex-wrap">
      <div className="w-20 h-20 rounded-full relative border border-black">
        <Image src={'/avatar/avatar.jpg'} alt="Author" fill className="absolute rounded-full" />
      </div>
      <div className="pr-0 lg:pr-4 text-center lg:text-left my-2">
        <h3 className="font-title font-bold text-xl">Sam (Thuy Do Thi)</h3>
        <span className="text-[15px]">Developer</span>
        <div className="flex items-center justify-center xl:justify-start mt-2">
          <Link href={'https://www.instagram.com/dev._.dumb/'} passHref className="flex items-center mr-2">
            <FiInstagram color="#ef00a2" />
          </Link>
          <Link href={'https://www.linkedin.com/in/thuysddoox/'} passHref className="flex items-center mx-2">
            <FaLinkedinIn color="#175beb" />
          </Link>
          <Link href={''} passHref className="flex items-center mx-2">
            <FaTiktok color="black" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Avatar;
