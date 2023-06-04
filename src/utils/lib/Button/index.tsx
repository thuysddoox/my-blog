export type ButtonProps = {
  name?: string;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  handleClick?: () => void;
};

const Button = ({ name, className, icon, disabled = false, isLoading = false, handleClick }: ButtonProps) => {
  return (
    <button
      className={`${className} ${disabled ? 'disabled' : ''} flex items-center`}
      onClick={(e) => {
        if (handleClick) e.preventDefault();
        handleClick?.();
      }}
      disabled={disabled}
    >
      <span>{name}</span>
      {icon}
      {isLoading && <span className="loader ml-3"></span>}
    </button>
  );
};
export default Button;
