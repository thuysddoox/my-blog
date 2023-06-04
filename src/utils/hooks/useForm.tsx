import { debounce } from '@utils/helpers/debounce';
import { ChangeEvent, useState } from 'react';

export const useForm = (
  initalValues: { [key: string]: string },
  initalErrors: { [key: string]: string | undefined }
) => {
  const [values, setValues] = useState<typeof initalValues>(initalValues);
  const [errors, setErrors] = useState<typeof initalErrors>(
    initalErrors ?? { name: 'Enter your name.', email: 'Enter your email.' }
  );
  const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let key = e?.target?.name;
    let value = e?.target?.value;
    let error = validate(key, value);
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: error }));
  };
  const handleOnChange = () => {
    return debounce(onChange, 300);
  };
  const handleSubmit = (callback: Function) => {
    let lastErrors = {};
    for (let key in values) {
      let error = validate(key, values[key]);
      lastErrors = { ...lastErrors, [key]: error };
    }
    setErrors(lastErrors);
    let hasError = Object.values(lastErrors)?.some((val) => val != '' && val != undefined);
    if (!hasError) callback();
  };
  const reset = () => {
    setErrors(initalErrors);
    setValues(initalValues);
  };
  return {
    values,
    errors,
    onChange,
    handleSubmit,
    handleOnChange,
    reset,
  };
};

const validate = (key: string, value: string) => {
  switch (key) {
    case 'email': {
      if (!value || value.length === 0) return 'Enter your email.';
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) return 'Email is invalid.';
      else return;
    }
    case 'name': {
      if (!value || value.length === 0) return 'Enter your name.';
      if (/[0-9]+/.test(value)) return "Name can't contain digit.";
      else return;
    }
    case 'content': {
      if (!value || value.length === 0) return 'Enter your comment.';
      else return;
    }
  }
};
