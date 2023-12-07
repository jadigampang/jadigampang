"use client";

import { createContext } from "react";
import React, { useState } from "react";

function Index() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <nav className='py-10 mb-12 flex justify-around dark:text-white dark:bg-sky-300'>
        <h1 className='font-burtons text-3xl'>CUBE</h1>
        <ul className='flex items-center'>
          <li>
            <a
              className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
              href='#'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Index;
