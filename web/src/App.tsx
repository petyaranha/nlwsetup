import './styles/global.css';
import './lib/dayjs'
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
}
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {

//   return (
//     <h1>Hello World!"</h1>
//   )
// }

// export default App
