import WrapperContent from '@components/Layout/WrapperContent';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImSkype } from 'react-icons/im';
import { SiZalo } from 'react-icons/si';

const FollowMe = ({ className }: { className?: string }) => {
  return (
    <WrapperContent title="Follow Me!" className={className}>
      <ul className="font-title">
        <li>
          <Link href={''} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FaFacebookF fontSize="1.2rem" color="#175beb" />
            </span>
            <span className="font-medium text-base sm:text-lg">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={''} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FiInstagram fontSize="1.2rem" color="#ef00a2" />
            </span>
            <span className="font-medium text-base sm:text-lg">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href={''} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <FaLinkedinIn fontSize="1.2rem" color="#175beb" />
            </span>
            <span className="font-medium text-base sm:text-lg">LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href={''} passHref className="flex items-center mb-3">
            <span className="inline-block p-3 mr-3 rounded-full bg-white dark:bg-[#EAFDFC] border border-black press">
              <SiZalo fontSize="1.2rem" color="#1da1f2" />
            </span>
            <span className="font-medium text-base sm:text-lg">Zalo</span>
          </Link>
        </li>
      </ul>
    </WrapperContent>
  );
};

export default FollowMe;
