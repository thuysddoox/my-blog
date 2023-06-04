import { Wrapper } from '@components/Layout';
import Input from '@utils/lib/Input';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
  const router = useRouter();
  const [keyWord, setKeyWord] = useState<string>((router?.query?.key as string) ?? '');
  const handleSearch = () => {
    router.push({ query: { key: keyWord } });
  };
  return (
    <Wrapper className="bg-content dark:bg-[#8dc4d1] p-8 rounded-lg shadow-md border border-black text-center mb-8 w-full sm:min-w-[500px] sm:w-[70%] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-extrabold font-title mb-3 sm:mb-5">{`Search results for: "${keyWord}"`}</h2>
      <div>
        <Input
          type="text"
          name="key"
          className="py-2 sm:py-2 px-3 w-[90%] sm:w-3/4 sm:min-w-[400px] mx-auto"
          inputClass="py-2 sm:py-2 px-3"
          icon={<FiSearch className="text-primary" />}
          value={keyWord}
          onChange={(e) => {
            setKeyWord(e?.target?.value);
          }}
          onKeyUp={(e) => {
            if (e.code == 'Enter') handleSearch();
          }}
          onClick={handleSearch}
          placeholder="Type to start your search..."
        />
      </div>
    </Wrapper>
  );
};

export default SearchBox;
