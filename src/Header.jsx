import React from 'react'
import logo from './assets/motorlogo.png'


function Header() {
  function OpenMenubar(){
    let menu = document.getElementById('menu')
    let overlay = document.getElementById('overlay')
    menu.style.left = '0'
    menu.style.transition = '.6s ease-in-out'
    overlay.style.display = 'flex'
    overlay.style.transition = '.5s ease-in-out'
  }
  function CLoseMenu(){
    menu.style.left = '-100%'
     menu.style.transition = '.6s ease-in-out'
    overlay.style.display = 'none'
    overlay.style.transition = '.5s ease-in-out'
  }

  return (
    <>
    <div id='overlay' className='inset-0 fixed bg-black/90 hidden'></div>
    <header className="bg-gradient-to-r from-[#141a29] to-[#3b588f] p-4 flex items-center justify-between px-4 lg:px-0 lg:justify-around w-full fixed z-50 top-0">
        <img className='w-[70px]' src={logo} alt="logo" />
        <ul className='flex justify-content-center gap-5 text-white hidden md:flex lg:flex flex-wrap'>
          <li className='hover:scale-[1.07] duration-500'>Home</li>
          <li className='hover:scale-[1.07] duration-500'>About</li>
          <li className='hover:scale-[1.07] duration-500'>Contact</li>
          <li className='hover:scale-[1.07] duration-500'>Services</li>
        </ul>
        <p onClick={OpenMenubar} className='text-[1.7em] text-white md:hidden lg:hidden '>☰</p>
    </header>

    <div id='menu' className='fixed left-[-100%] top-0 h-[100vh] w-[280px] bg-[#141a29]/96 z-60 '>
    <div className='flex justify-end p-4 '><p onClick={CLoseMenu}>✖</p></div>
      <ul className='flex flex-col justify-content-center gap-3 pl-6 pr-6 text-white'>
          <li className='hover:scale-[1.07] duration-500 border-b'>Home</li>
          <li className='hover:scale-[1.07] duration-500 border-b'>About</li>
          <li className='hover:scale-[1.07] duration-500 border-b'>Contact</li>
          <li className='hover:scale-[1.07] duration-500 border-b'>Services</li>
        </ul>
        <div className='flex justify-end items-end pt-[63vh]'>
          <img className='w-[120px]' src={logo} alt="" />
        </div>
    </div>
    </>
  ) 
}

export default Header
