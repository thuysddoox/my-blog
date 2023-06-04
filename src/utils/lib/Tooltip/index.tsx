import { styled } from 'styled-components';

export type TooltipProps = {
  content: any;
  children: any;
  position?: string;
  className?: string;
};
const TooltipWrapper = styled.div<{ position: string }>`
  .tooltip {
    transform: scale(0);
  }
  .tooltip::before {
    position: absolute;
    top: ${({ position }) => (position === 'center' ? 'calc(100% - 2px)' : '50%')};
    left: ${({ position }) => (position === 'center' ? '50%' : '-1px')};
    content: '';
    padding: ${({ position }) => (position === 'center' ? '5px' : '4px')};
    background: white;
    border-width: 1px;
    border-color: ${({ position }) => (position === 'center' ? 'white black black white' : 'white white black black')};
    transform: rotate(45deg) translateX(-50%);
  }
  &:hover {
    .tooltip {
      transform: scale(1);
    }
  }
`;
const Tooltip = ({ children, content, position = 'center', className }: TooltipProps) => {
  return (
    <TooltipWrapper className={`relative inline-block ${className}`} position={position ?? 'center'}>
      <div className="inline-block">{children}</div>
      <div
        className={`transition-all duration-300 origin-center rounded-md px-2 py-1 absolute tooltip  bg-white border border-black w-max text-sm ${
          position == 'center'
            ? '-top-[calc(100%_+_6px)] -left-[calc(100%_-_3px)]'
            : 'top-[-6px] left-[calc(100%_+_12px)]'
        }`}
      >
        {content}
      </div>
    </TooltipWrapper>
  );
};

export default Tooltip;
