import { useEffect, useMemo, useState } from 'react';
import Form from './components/Form';
import Heading from './components/Heading';
import { ShortenResult } from './services/shorten/types';

function App() {
  const [shortenResult, setShortenResult] = useState<ShortenResult>();

  const isShortenSuccess = useMemo(() => Boolean(shortenResult && shortenResult?.slug), [shortenResult]);

  const shortURL = isShortenSuccess ? `${import.meta.env.VITE_API_URL}${shortenResult?.slug}` : '';

  useEffect(() => {
    const resultDialog = document.getElementById('result') as HTMLDialogElement;

    if (isShortenSuccess) {
      resultDialog.showModal();
    }
  });

  return (
    <main className="h-screen bg-neutral-800 text-white p-2">
      <a href="/">
        <Heading Type="h1" text="URL Shortener" />
      </a>
      <Form setShortenResult={setShortenResult} />
      {/* <dialog id="result" open={isShortenSuccess}>{shortURL}</dialog> */}
      <dialog id="result">{shortURL}</dialog>
    </main>
  );
}

export default App;
