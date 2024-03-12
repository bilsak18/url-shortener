import { FormEventHandler, KeyboardEventHandler, useEffect, useRef } from 'react';

type InputProps = {
  label: string;
  placeholder?: string;
  onEnter?: (element: HTMLFormElement) => void;
};

const onInput: FormEventHandler<HTMLTextAreaElement> = (e) => {
  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;

  return;
};

export default function Input({ placeholder, label, onEnter }: InputProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  });

  const handleOnKeyUp: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      onEnter?.(e.target as HTMLFormElement);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="input">{label}</label>
      <textarea
        ref={ref}
        id="input"
        name="input"
        className="min-h-16 max-h-[90vh] w-full bg-inherit resize-none border-solid border-2 rounded-t pb-10"
        placeholder={placeholder}
        onInput={onInput}
        onKeyUp={handleOnKeyUp}
      />
    </div>
  );
}
