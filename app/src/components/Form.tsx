import { FormEventHandler, useCallback } from 'react';
import shorten from '../services/shorten/shorten';
import { ShortenResult } from '../services/shorten/types';
import Button from './Button';
import Input from './Input';

type FormProps = {
  setShortenResult: (data: ShortenResult) => void;
};

export default function Form({ setShortenResult }: FormProps) {
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonFormData = Object.fromEntries(formData);

    shorten(jsonFormData['input'] as string).then(
      (result) => {
        setShortenResult(result);
      },
      () => {}
    );
  }, []);

  const onEnterKeyPressed = (element: HTMLFormElement) => {
    element.requestSubmit();
  };

  return (
    <form className="relative m-auto w-6/12" onSubmit={handleOnSubmit}>
      <Input
        label="Enter/Paste the URL that you would like to shorten:"
        placeholder="https://example.com"
        onEnter={onEnterKeyPressed}
      />
      <Button
        className="absolute bottom-1 right-2 disabled:opacity-[50%] bg-gradient-to-r from-blue-800 to-blue-400 rounded px-1"
        type="submit"
        label="Shorten"
      />
    </form>
  );
}
