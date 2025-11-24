import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import jsx from "refractor/lang/jsx";
import sql from "refractor/lang/sql";
import bash from "refractor/lang/bash";
import markdown from "refractor/lang/markdown";
import css from "refractor/lang/css";
import scss from "refractor/lang/scss";
import python from "refractor/lang/python";
import html from "refractor/lang/markup";
import yaml from "refractor/lang/yaml";
import graphql from "refractor/lang/graphql";
import json from "refractor/lang/json";
import java from "refractor/lang/java";
import Clipoboard from "./Clipoboard";

// Supported languages: https://prismjs.com/#supported-languages
Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(sql);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(markdown);
Refractor.registerLanguage(css);
Refractor.registerLanguage(scss);
Refractor.registerLanguage(python);
Refractor.registerLanguage(html);
Refractor.registerLanguage(yaml);
Refractor.registerLanguage(graphql);
Refractor.registerLanguage(json);
Refractor.registerLanguage(java);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-3 xs:my-4 sm:my-5 md:my-6 overflow-x-auto">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 translate-y-2">
        {value.filename && <p className="text-xs sm:text-sm truncate">{value.filename}</p>}
        <Clipoboard content={value.code} />
      </div>
      <div className="overflow-x-auto">
        <Refractor
          language={value.language ?? "jsx"}
          value={value.code}
          className="text-xs xs:text-xs sm:text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
        />
      </div>
    </div>
  );
}
