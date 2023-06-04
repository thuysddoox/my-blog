import { Wrapper } from '@components/Layout';
import React, { ChangeEvent, ChangeEventHandler, KeyboardEventHandler, MouseEvent } from 'react';

export type InputProps = {
  isMultiline?: boolean;
  name: string;
  type: string;
  error?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  inputClass?: string;
  icon?: any;
  autoFocus?: boolean;
  onClick?: () => void;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
};

const Input = ({
  isMultiline = false,
  name,
  value,
  error,
  icon,
  placeholder = '',
  className,
  inputClass,
  type = 'text',
  autoFocus = false,
  onChange,
  onKeyUp,
  onClick,
}: InputProps) => {
  return (
    <Wrapper className={`${className} relative`}>
      {!isMultiline ? (
        <input
          type={type}
          autoFocus={autoFocus}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={value}
          className={`text-[15px] sm:text-base w-full w-full mb-1 p-3 py-2 border dark:bg-[#EAFDFC] ${
            error ? 'invalid' : 'border-black'
          } rounded-md font-body ${inputClass}`}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          className={`text-[15px] sm:text-base w-full px-3 py-2 sm:py-3 border dark:bg-[#EAFDFC] ${
            error ? 'invalid' : 'border-black'
          } rounded-md font-body`}
        />
      )}
      {icon && (
        <button
          onClick={onClick}
          className="px-3 py-2 bg-white dark:bg-[#EAFDFC] absolute top-0 right-0 -translate-x-1/2 translate-y-[12px]"
        >
          {icon}
        </button>
      )}
      {error && <span className="text-primary">{error}</span>}
    </Wrapper>
  );
};

export default React.memo(Input);
