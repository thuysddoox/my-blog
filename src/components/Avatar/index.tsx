import { Wrapper } from '@components/Layout';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { SiZalo } from 'react-icons/si';

const Avatar = () => {
  return (
    <Wrapper className="flex items-center justify-center xl:justify-start flex-wrap">
      <div className="w-20 h-20 rounded-full relative border border-black">
        <Image src={'/avatar/avatar.jpg'} alt="Author" fill className="absolute rounded-full" />
      </div>
      <div className="px-0 lg:px-4 text-center lg:text-left my-2">
        <h3 className="font-title font-bold text-xl">Jonathan Doe</h3>
        <span className="text-[15px]">Founder & Editor</span>
        <div className="flex items-center justify-center xl:justify-start mt-2">
          <FaFacebookF color="#175beb" className="mr-2" />
          <FiInstagram color="#ef00a2" className="mx-2" />
          <SiZalo color="#1da1f2" className="mx-2" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Avatar;
