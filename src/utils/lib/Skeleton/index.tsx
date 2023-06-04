import { keyframes, styled } from 'styled-components';
export type SkeletonIProps = {
  circle?: boolean;
  width?: number;
};
const loading = keyframes`
  to {
    background-position-x: -20%;
  }
`;
const SkeletonWrap = styled.div`
  background-color: var(--loading-grey);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s ${loading} ease-in-out infinite;
`;
const Skeleton = ({}: {}) => {
  return (
    <SkeletonWrap>
      <div></div>
    </SkeletonWrap>
  );
};

export default Skeleton;
