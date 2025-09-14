import WrapperContent from '@components/Layout/WrapperContent';
import Link from 'next/link';
import { BsAt } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const FollowMe = ({ className }: { className?: string }) => {
  return (
    <WrapperContent title="Follow Me!" className={className}>
      <ul className="font-title">
        <li>
          <Link href={'https://www.facebook.com/thuy.o.366692'} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FaFacebookF fontSize="1.2rem" color="#175beb" />
            </span>
            <span className="font-medium text-base sm:text-lg">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={'https://www.instagram.com/dev._.dumb/'} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FiInstagram fontSize="1.2rem" color="#ef00a2" />
            </span>
            <span className="font-medium text-base sm:text-lg">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href={'https://www.linkedin.com/in/thuysddoox/'} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FaLinkedinIn fontSize="1.2rem" color="#175beb" />
            </span>
            <span className="font-medium text-base sm:text-lg">LinkedIn</span>
          </Link>
        </li>
        {/* <li>
          <Link href={''} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FaTiktok  fontSize="1.2rem" color="black" />
            </span>
            <span className="font-medium text-base sm:text-lg">Tiktok</span>
          </Link>
        </li> */}
        <li>
          <Link href={'mailto:dothuy302000@gmail.com'} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <BsAt  fontSize="1.2rem" color="#D93647" />
            </span>
            <span className="font-medium text-base sm:text-lg">Email</span>
          </Link>
        </li>
      </ul>
    </WrapperContent>
  );
};

export default FollowMe;
