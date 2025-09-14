import Avatar from '@components/Avatar';
import WrapperContent from '@components/Layout/WrapperContent';

const AboutMe = ({className}:{className?: string}) => {
  return (
    <WrapperContent title="About Me" className={className}>
      <div>
        <Avatar />
        <p className="mt-4 text-[15px]">
          Hello! I'm Sam, come from Viet Nam. Welcome to my blog where I share the tiny knowledge I know and the tiny things in life.
        </p>
      </div>
    </WrapperContent>
  );
};

export default AboutMe;
