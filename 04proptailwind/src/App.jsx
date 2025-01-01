import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card";

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-5'>Tailwind test</h1>

      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://static-00.iconduck.com/assets.00/user-icon-512x512-x23sj495.png" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div className="text-sl">
                    Staff Engineer, Algolia
              </div>
            </figcaption>
        </div>
      </figure> */}

      <Card username="Mayur" btntext="click me"/>
      <Card username="Max" btntext="Visit me"/>
    </>
  )
}

export default App;
