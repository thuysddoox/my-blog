import { Wrapper } from '@components/Layout';
import { MessageContext } from '@utils/contexts/messageContext';
import Tooltip from '@utils/lib/Tooltip';
import { useContext } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const ShareOnSocial = ({ url, className }: { url: string; className?: string }) => {
  const { alert } = useContext(MessageContext);
  const handleCopyToClipboard = () => {
    navigator?.clipboard?.writeText(url);
    alert?.({ content: 'Copied to clipboard!', status: 'success' });
  };
  return (
    <Wrapper
      className={`shadow-md inline-flex flex-col items-center justify-center bg-white dark:bg-[#EAFDFC] border border-black rounded-[20px] w-10 px-2 py-4 ${className}`}
    >
      <Tooltip content={'Share on Facebook'} className="hover:translate-x-[2px] mt-3 cursor-pointer" position="right">
        <FacebookShareButton url={url}>
          <FaFacebookF fontSize="1.1rem" color="#175beb" className="hover:translate-x-[2px]" />
        </FacebookShareButton>
      </Tooltip>
      <Tooltip content={'Share on Twitter'} className="hover:translate-x-[2px] mt-3 cursor-pointer" position="right">
        <TwitterShareButton url={url}>
          <AiOutlineTwitter fontSize="1.1rem" color="#1da1f2" className="hover:translate-x-[2px]" />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip content={'Copy Link'} className="hover:translate-x-[2px] mt-3 cursor-pointer" position="right">
        <span onClick={handleCopyToClipboard}>
          <HiLink fontSize="1.1rem" color="#ef00a2" />
        </span>
      </Tooltip>
    </Wrapper>
  );
};
export default ShareOnSocial;
