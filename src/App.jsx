import { Mail, Phone, ArrowRight, ChevronLeft } from "lucide-react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">

  {/* Header */}
  <div className="bg-[#0f172a] text-white pt-6 pb-6 px-6">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center">
          <ChevronLeft size={20} strokeWidth={2} />
      </div>
      <h1 className="text-lg font-semibold">
        FORGOT PASSWORD
      </h1>
    </div>
  </div>

  {/* Content Area */}
  <div className="px-6">

    {/* Big top empty space (matches screenshot) */}
    <div className="h-70" />

    {/* Instruction Text */}
    <p className="text-center text-gray-600 text-sm leading-relaxed mb-10 h-15">
      Enter your registered email/phone number <br />to receive an OTP to reset your password
    </p>

    {/* Email */}
    <div className="bg-[#7a7370] text-white p-4 rounded-xl shadow-md mb-6 flex items-center gap-3 ">
      <Mail size={20} />
      <input
        placeholder="Email"
        className="bg-transparent outline-none w-full placeholder-white"
      />
    </div>

    {/* Phone */}
    <div className="bg-[#7a7370] text-white p-4 rounded-xl shadow-md mb-12 flex items-center gap-3">
      <Phone size={20} />
      <input
        placeholder="Phone Number"
        className="bg-transparent outline-none w-full placeholder-white"
      />
    </div>

    {/* Continue Button */}
    <button className="w-full bg-[#0f172a] text-white py-5 rounded-full shadow-lg flex items-center justify-between px-6 mb-10">
      Continue
      <ArrowRight size={20} />
    </button>

  </div>
</div>

  )
}
