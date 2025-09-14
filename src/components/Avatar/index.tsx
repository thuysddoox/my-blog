import { Wrapper } from '@components/Layout';
import { ThemeColorContext, ThemeColorContextIProps } from '@utils/contexts/themeContext';
import Image from 'next/image';
import { useContext } from 'react';

const Avatar = ({className,name,title}:{className?: string, name?: React.ReactNode, title?: React.ReactNode}) => {
  const { themeApp } = useContext(ThemeColorContext) as ThemeColorContextIProps;
  
  return (
    <Wrapper className="flex items-center justify-center xl:justify-start flex-wrap gap-2">
      <div className={`w-20 h-20 rounded-full relative border border-black ${className}`}>
        <Image src={themeApp == 'dark' ? '/avatar/avatar11.jpg' : '/avatar/avatar12.jpg'} alt="Author" fill className="absolute rounded-full object-cover" />
      </div>
      <div className="pr-0 lg:pr-4 text-center lg:text-left my-2">
        {name ?? <h3 className="font-title font-bold text-xl">Sam</h3>}
        {title ?? <span className="text-[15px]">Developer</span>}
        {/* <div className="flex items-center justify-center xl:justify-start mt-2">
          <Link href={'https://www.instagram.com/dev._.dumb/'} passHref className="flex items-center mr-2">
            <FiInstagram color="#ef00a2" />
          </Link>
          <Link href={'https://www.linkedin.com/in/thuysddoox/'} passHref className="flex items-center mx-2">
            <FaLinkedinIn color="#175beb" />
          </Link>
          <Link href={''} passHref className="flex items-center mx-2">
            <FaTiktok color="black" />
          </Link>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Avatar;
