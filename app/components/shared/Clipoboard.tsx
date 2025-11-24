"use client";

import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Clipoboard({ content }: { content: string }) {
  const [status, setStatus] = useState(false);

  function handleClipboard() {
    navigator.clipboard.writeText(content);
    setStatus(true);

    setTimeout(() => {
      setStatus((status) => !status);
    }, 1500);
  }

  return (
    <button 
      onClick={handleClipboard}
      className="p-1 xs:p-1.5 sm:p-2 rounded-md dark:hover:bg-zinc-700/50 hover:bg-zinc-200/50 transition-colors duration-200"
      title="Copy to clipboard"
    >
      {!status ? (
        <BiCopy className="text-sm xs:text-base sm:text-lg" />
      ) : (
        <RiCheckboxCircleFill className="text-sm xs:text-base sm:text-lg text-secondary-color transition" />
      )}
    </button>
  );
}
