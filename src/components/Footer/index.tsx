import { Wrapper } from '@components/Layout';

const Footer = () => {
  return (
    <Wrapper className="text-center py-4 font-title bg-content dark:bg-[#8dc4d1] text-[15px] sm:text-base">
      © {new Date().getFullYear()} dev_dumb. All Rights Reserved.
    </Wrapper>
  );
};

export default Footer;
