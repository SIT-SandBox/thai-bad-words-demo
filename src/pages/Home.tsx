import { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import './Home.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThaiAlphabetBackground } from "../components/thai-alphabet-background";

export default function Home() {
  const [download, SetDownload] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const codeText = "npm i @sit-sandbox/thai-bad-words";
    navigator.clipboard.writeText(codeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Success copied to clipboard!");
    }).catch((err:any) => {
      toast.error("Failed to copy!",err); 
    });
  };

  useEffect(() => {
    const url = `https://api.npmjs.org/downloads/point/last-month/@sit-sandbox/thai-bad-words`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(`Download:`, data.downloads);
        SetDownload(data.downloads)
      })
      .catch(error => {
        console.error(`Error fetching data:`, error);
      });
  }, [])

  return (
    <div className="min-h-screen bg-black w-full flex justify-center al gap-4">
      <Nav></Nav>
      <ToastContainer position="bottom-right" theme="dark" />
      <ThaiAlphabetBackground></ThaiAlphabetBackground>
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-8 w-full gap-4">
        <div className="relative w-full text-center flex justify-center flex-col items-center gap-4">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            🔍Thai Bad Words Detection Library
          </h1>
          <p className="mb-8 text-lg text-gray-200 flex gap-2">
            <code>npm i @sit-sandbox/thai-bad-words</code>
            <button className="cursor-pointer" onClick={handleCopyClick}>
              <i className="ri-survey-line"></i>
            </button>
            {copied && <span className="text-green-500 ml-2">Copied!</span>}
          </p>
          <input
            placeholder="Enter your bad word!"
            className="bg-white/10 text-white placeholder-gray-400 border-none outline-0 text-4xl p-4 w-[80%]"
          />
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {['https://avatars.githubusercontent.com/u/195660158?s=400&u=aea6719c50a0924cddaa4ccc61c5293e49572ef9&v=4',
                'https://avatars.githubusercontent.com/u/191699806?s=400&u=1afe1c91dfeea8387c389a3832faec5c5671c339&v=4',
                'https://fulltech.vercel.app/FullTech-V2.png'
              ].map((i) => (
                <img key={i} className="h-8 w-8 rounded-full border-2 border-background bg-primary" src={i} />
              ))}
            </div>
            <span className="text-sm text-gray-200">{download - 1} + used our library last month!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

