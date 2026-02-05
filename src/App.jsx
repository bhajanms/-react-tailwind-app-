import { Mail, Phone, ArrowRight, ChevronLeft } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PhoneInput from "react-phone-number-input"
import { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

export default function App() {

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()


  // ✅ email format check
  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  function handleSubmit() {

  if (email && !validateEmail(email)) {
    setError("Enter a valid email address")
    return
  }

  if (phone && !isValidPhoneNumber(phone)) {
    setError("Enter valid 10-digit Indian mobile number")
    return
  }

  if (!email && !phone) {
    setError("Enter email or phone number")
    return
  }

  setError("")
  alert("Proceed to OTP screen")
}


  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">

      {/* Header */}
      <div className="bg-[#0f172a] text-white py-6 px-6">
        <div className="flex items-center gap-3">
          <button
             onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <h1 className="text-lg font-semibold">
            FORGOT PASSWORD
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 w-full max-w-md mx-auto">

        {/* top space — responsive */}
        <div className="h-60 sm:h-60" />

        {/* Instruction */}
        <p className="text-center text-gray-600 text-sm leading-relaxed mb-10">
          Enter your registered email/phone number <br />
          to receive an OTP to reset your password
        </p>

        {/* Email */}
        <div className="bg-[#7a7370] text-white p-4 rounded-xl shadow-md mb-2 flex items-center gap-3">
          <Mail size={20} />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-transparent outline-none w-full placeholder-white"
          />
        </div>

        {/* Email error */}
        {error && email && !phone && (
          <p className="text-red-600 text-sm mb-4">
            {error}
          </p>  
        )}


        {/* Phone with country codes */}
        <div className="bg-[#7a7370] text-white p-4 rounded-xl shadow-md mb-12 flex items-center gap-3 relative overflow-visible">
          <Phone size={20} />
          <PhoneInput
            country="IN"
            defaultCountry="IN"
            international
            countryCallingCodeEditable={false}
            value={phone}
            onChange={setPhone}
            className="phone-input w-full"
          />
        </div>
          {/* Phone error */}
          {error && phone && (
            <p className="text-red-600 text-sm mb-6">
              {error}
            </p>
          )}



        {/* Continue */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0f172a] text-white py-5 rounded-full shadow-lg flex items-center justify-between px-6 mb-10 active:scale-95 transition"
        >
          Continue
          <ArrowRight size={20} />
        </button>

      </div>
    </div>
  )
}
