import Avatar from '@components/Avatar';
import WrapperContent from '@components/Layout/WrapperContent';

const AboutMe = ({className}:{className?: string}) => {
  return (
    <WrapperContent title="About Me" className={className}>
      <div>
        <Avatar />
        <p className="mt-4 text-[15px]">
          Hello! My name is Sam working from VietNam. I create some Ghost and Wordpress themes for differents
          markets, also, i offer live support via our ticket system.
        </p>
      </div>
    </WrapperContent>
  );
};

export default AboutMe;
