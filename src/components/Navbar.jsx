import React from 'react'
function Navbar() {
    const menu = document.getElementById("menu")
    const hamburger = document.getElementById("hamburger")
    const hlink = document.querySelectorAll(".hlink")
    const close = document.getElementById("close")
    // console.log(hamburger?.classList)
    // console.log(menu?.classList)
    const clickHamburger = ()=>{
        menu.classList.toggle("hidden")
    }
    // hlink.forEach(link =>{
    // link.addEventListener('click',()=>{
    //     menu.classList?.toggle("hidden")
    // })
    // })
    
  return (
    <div className='bg-color-primary text-white h-screen tracking-wider w-full '>
        <header className='w-full lg:px-20'>
            <nav className=' px-6 flex justify-between items-center'>
                   <div className='w-20 py-5 text-red-500 font-bold text-lg lg:text-2xl'>
                    <a href="#home"><span className='text-yellow-500'>Cooli</span>App.</a>
                   </div>
                   <div>
                    <ul className='hidden lg:flex items-center space-x-6'>
                        <li><a href="" className='hover:text-orange-400 ease-in duration-200'>Home</a></li>
                        <li><a href="" className='hover:text-orange-400 ease-in duration-200'>About</a></li>
                        <li><a href="" className='hover:text-orange-400 ease-in duration-200'>Login</a></li>
                        <li><a href="" className='hover:text-orange-400 ease-in duration-200'>Register</a></li>
                        <li><a href="" className='hover:text-orange-400 ease-in duration-200'>Contact</a></li>
                        <li><button className='bg-orange-400 px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Sign in</button>
                        </li>
                    </ul>
                   </div>
                   {/* mobile screen */}
                   <div id="hamburger" className='lg:hidden cursor-pointer z-50' onClick={clickHamburger}>
                   <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                   </div>
                   <div id="menu" className='hidden bg-color-primary h-[100vh] absolute inset-0'>
                    <ul className='h-full grid place-items-center py-20'>
                    <li><a href="#home" className='hover:text-orange-400 ease-in duration-200'>Home</a></li>
                        <li><a class="hlink" href="#About" className='hover:text-orange-400 ease-in duration-200'>About</a></li>
                        <li><a class="hlink" href="#home" className='hover:text-orange-400 ease-in duration-200'>Login</a></li>
                        <li><a class="hlink" href="#home" className='hover:text-orange-400 ease-in duration-200'>Register</a></li>
                        <li><a class="hlink" href="#home" className='hover:text-orange-400 ease-in duration-200'>Contact</a></li>
                        <li><button className='bg-orange-400 px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Sign in</button>
                        </li>
                    </ul>
                   </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar