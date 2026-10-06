import { ChevronDown } from 'lucide-react'

export default function ExploreMore({ onClick, text }) {
  return (
    <div className="py-6 text-center">
      <button
        onClick={onClick}
        className="inline-flex flex-col items-center text-[#F98D11] transition hover:text-orange-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
        <ChevronDown size={24} className="-mt-4.5" />
      </button>
      <p
        onClick={onClick}
        className="font-medium text-[#F98D11] cursor-pointer select-none"
      >
        {text}
      </p>
    </div>
  )
}
