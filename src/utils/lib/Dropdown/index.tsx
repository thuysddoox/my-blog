import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { styled } from 'styled-components';

const DropdownWrap = styled.div`
  .droplist {
    opacity: 0;
    transition: all 0.3s linear;
  }

  &.root:hover {
    .droplist {
      opacity: 1;
    }
  }
  @media (min-width: 768px) {
    display: block;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(20px);
      background: transparent;
      height: 20px;
      width: 100%;
      display: block;
    }
  }
`;
const Dropdown = ({ children, child }: { children: React.ReactNode; child: React.ReactNode }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <DropdownWrap className="inline-block relative root hover:text-primary" onBlur={() => setShow(false)}>
      <div className="flex items-center" onClick={() => setShow((prev) => !prev)}>
        {children}
        <IoIosArrowDown fontSize={'1rem'} className="ml-2" />
      </div>
      <div
        className={`md:absolute top-full transition-all overflow-hidden duration-300 child droplist translate-y-[14px] left-0 md:shadow-lg border-black md:border bg-white dark:bg-[#EAFDFC] dark:md:bg-[#91D8E4] md:rounded-md px-4 py-0 md:py-4 min-w-[150px] w-[max-content] md:h-[auto] ${
          show ? 'h-full opacity-100' : 'h-0 opacity-0 '
        }`}
      >
        {child}
      </div>
    </DropdownWrap>
  );
};

export default Dropdown;
