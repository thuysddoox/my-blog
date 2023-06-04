import { Wrapper } from '@components/Layout';
import Input from '@utils/lib/Input';
import TagComponent from '@utils/lib/Tag';
import { createPortal } from 'react-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Tag } from '@interfaces/common';
import { GET_TAGS } from '@services/tag';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const SearchModal = ({ isOpen = false, onClose }: { isOpen?: boolean; onClose?: () => void }) => {
  const { data } = useQuery(GET_TAGS);
  const [keyWord, setKeyWord] = useState<string>('');
  const router = useRouter();

  const handleSearch = () => {
    router.push({ pathname: '/search', query: { key: keyWord } });
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <Wrapper
            className={`fixed top-0 left-0 right-0 bg-content dark:bg-[#8dc4d1] z-[16] p-8 shadow-md border border-black text-center mb-8 w-screen h-screen sm:flex sm:flex-wrap sm:items-center sm:justify-center transition-all duration-450 ${
              isOpen ? 'scale-100 opacity-100 overflow-auto' : 'scale-0 opacity-0'
            }`}
          >
            <button className="absolute right-0 top-0 px-6 py-4 hover:text-primary">
              <IoMdClose fontSize={'1.6rem'} onClick={onClose} />
            </button>
            <div className="sm:flex-grow mt-16 sm:mt-0">
              <h2 className="text-3xl font-extrabold font-title mb-5">
                Press <span className="text-primary">ESC</span> to close
              </h2>
              <div className="my-6 sm:mt-10 sm:mb-12 mx-auto">
                <Input
                  type="text"
                  name="key"
                  className="py-2 sm:py-2 px-3 w-[90%] sm:w-3/4 sm:min-w-[400px] max-w-[800px] mx-auto"
                  inputClass="py-2 sm:py-2 px-3 w-full mx-auto"
                  icon={<FiSearch className="text-primary" />}
                  autoFocus={true}
                  value={keyWord}
                  onChange={(e) => {
                    setKeyWord(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    if (e.code == 'Enter') handleSearch();
                    else if (e.code == 'Escape') onClose?.();
                  }}
                  onClick={handleSearch}
                  placeholder="Type to start your search..."
                />
              </div>
              <div className="mt-6">
                <p className="my-4 text-lg">Or check our Popular Categories...</p>
                <div className={`flex flex-wrap justify-center`}>
                  {data?.tags?.map((tag: Tag) => (
                    <TagComponent tag={tag} key={tag?.id} className="my-2 mr-2 press" />
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>,
          document.body
        )}
    </>
  );
};

export default SearchModal;
