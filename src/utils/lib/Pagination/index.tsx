import { Wrapper } from '@components/Layout';
import Button from '../Button';
import { Dispatch, SetStateAction, useState } from 'react';

export type PaginationProps = {
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
const Pagination = ({ totalPage, currentPage, setCurrentPage }: PaginationProps) => {
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPage ? prev : ++prev));
  };
  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : --prev));
  };

  return (
    <Wrapper className="flex items-center justify-center my-4">
      <Button
        name="Previous"
        className="bg-primary font-semibold text-sm py-1 px-5 rounded-[20px] text-white press border border-black"
        handleClick={handlePreviousPage}
        disabled={currentPage === 1}
      />
      <span className="inline-block mx-4 font-medium text-[15px] text-black dark:text-white">
        Page {currentPage} of {totalPage}
      </span>
      <Button
        name="Next"
        className="bg-primary font-semibold text-sm py-1 px-5 rounded-[20px] text-white press border border-black"
        handleClick={handleNextPage}
        disabled={currentPage === totalPage}
      />
    </Wrapper>
  );
};

export default Pagination;
