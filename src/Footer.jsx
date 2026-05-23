import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-[#141a29] text-white border-t border-[#3b588f]/30 py-8 px-4 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-[1.6em] text-[#5984d8] font-bold ">MOTORCYCLE</span>
          <p className="text-[.8em]">© 2026 All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-[.8em] text-white">
          <span className="hover:text-[#5984d8] duration-500 cursor-pointer ">Privacy Policy</span>
          <span className="hover:text-[#5984d8] duration-500 cursor-pointer ">Terms of Service</span>
          <span className="hover:text-[#5984d8] duration-500 cursor-pointer ">Support</span>
        </div>
        <div className="flex gap-4 text-xl text-[#5984d8]">
          <span className="cursor-pointer">𝕏</span>
          <span className="cursor-pointer">✰</span>
          <span className="cursor-pointer">ⓕ</span>
          <span className="cursor-pointer">🏍</span>
        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer
