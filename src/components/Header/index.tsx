import { useQuery } from '@apollo/client';
import SearchModal from '@components/SearchModal';
import { Tag } from '@interfaces/common';
import { GET_TAGS } from '@services/tag';
import { useOutsideAlerter } from '@utils/hooks/useOutsideAlerter';
import Dropdown from '@utils/lib/Dropdown';
import { Dot } from '@utils/lib/Tag';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiInstagram, FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { RiMenu2Line } from 'react-icons/ri';
import { Wrapper } from '../Layout';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { data } = useQuery(GET_TAGS);

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, () => setIsOpenMenu(false));

  const handleScroll = () => {
    if (window.scrollY >= 100) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (isOpenMenu) {
      window.document.body.style.overflow = 'hidden';
    } else window.document.body.style.overflow = 'auto';
  }, [isOpenMenu]);

  return (
    <Wrapper
      className={`py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-12 left-0 top-0 z-10 border border-black w-full flex items-center justify-between shadow-md ${
        isScrolled
          ? 'left-0 top-0 w-screen z-10 fixed'
          : 'sm:rounded-[40px] sm:mt-10 w-screen sm:w-full fixed sm:relative'
      }`}
      style={{ backgroundColor: 'var(--bg-header)' }}
    >
      <button className="p-2 md:hidden" onClick={() => setIsOpenMenu(true)}>
        <RiMenu2Line fontSize={'1.4rem'} />
      </button>
      <Link href={'/'} passHref>
        <h3 className="text-3xl md:text-4xl font-extrabold flex-grow md:flex-grow-0 text-center text-icon">dev_dumb</h3>
      </Link>
      <div
        className={`fixed z-[20] md:z-[1] top-0 left-0 h-screen md:h-[auto] shadow-lg md:shadow-none bg-white md:bg-transparent md:p-0 md:relative dark:bg-[#EAFDFC] dark:md:bg-transparent flex-1 md:items-center justify-between md:justify-center flex flex-col md:flex-row transition-all duration-300 ${
          isOpenMenu ? 'w-[auto] px-4' : 'w-0 px-0 overflow-hidden md:overflow-visible'
        }`}
        ref={menuRef}
      >
        <button
          className="absolute right-0 top-0 px-6 py-4 hover:text-primary md:hidden"
          onClick={() => setIsOpenMenu(false)}
        >
          <IoMdClose fontSize={'1.6rem'} />
        </button>
        <ul
          className="flex py-4 md:py-0 md:flex-1 md:items-center md:justify-center text-lg flex-col md:flex-row"
          onBlur={() => setIsOpenMenu(false)}
        >
          <li className="mx-3 lg:mx-5 m-2 md:my-0 hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-3 lg:mx-5 m-2 md:my-0 md:overflow-hidden hover:md:overflow-visible">
            <Dropdown
              child={
                <>
                  <ul>
                    {data?.tags?.map((tag: Tag) => (
                      <li
                        key={tag?.id}
                        className="m-2 mr-5 text-black dark:text-[#1E5F74] hover:text-primary dark:hover:text-primary"
                      >
                        <Link href={`/tag/${tag?.slug}`} passHref className="flex items-center justify-start">
                          <Dot bgcolor={tag?.color?.hex} className={`inline-block p-[5px] mr-2 shadow-lg`}></Dot>
                          <span>{tag?.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              }
            >
              <button className="hover:text-primary">#Tag</button>
            </Dropdown>
          </li>
          <li className="mx-3 lg:mx-5 m-2 md:my-0 hover:text-primary">
            <Link href="/about">About</Link>
          </li>
          <li className="hidden md:block mx-3 lg:mx-5 m-2 md:my-0 hover:text-primary" onClick={() => setIsOpen(true)}>
            <FiSearch />
          </li>
        </ul>
        <div className="flex items-center justify-between py-4 md:py-0">
          {/* <FaFacebookF fontSize="1.3rem" color="#175beb" className="mx-3 block sm:hidden lg:block" />
          <FiInstagram fontSize="1.3rem" color="#ef00a2" className="mx-3 block sm:hidden lg:block" />
          <FaTiktok fontSize="1.3rem" color="black" className="mx-3 block sm:hidden lg:block" /> */}
          <ThemeSwitcher className="ml-4" />
        </div>
      </div>
      <button
        className="sm:mx-3 lg:mx-5 m-1 md:my-0 inline-block p-3 rounded-full bg-gray-700 dark:bg-[#1E5F74] hover:bg-primary text-white md:hidden hover:text-primary"
        onClick={() => setIsOpen(true)}
      >
        <FiSearch />
      </button>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Wrapper>
  );
};

export default Header;
