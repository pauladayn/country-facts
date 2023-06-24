import { ThemeButton } from '../atoms/ThemeButton';
/* import { SearchBar } from '../molecules/SearchBar'; */
const Header = () => {
    return (
        <header className='z-50 flex flex-col bg-teal-500'>
            <div className='top-0 z-10 h-18 pt-6'>
                <div className='relative px-4 sm:px-8 lg:ps-12 lg: pe-5'>
                    <div className='ms-auto max-w-2xl lg:max-w-5xl'>
                        <div className='relative flex gap-6'>
                            {/* logo */}
                            {/*       <div className='flex flex-1 justify-center'>
                                <SearchBar />
                            </div> */}
                            {/* nav */}
                            {/*            <div className='flex flex-1 justify-end md:justify-center'>
                <nav className='pointer-events-auto hidden lg:flex'>
                  <ul className='flex rounded-xl bg-stone-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold px-3'>
                    <li><Link href='#' className='relative block px-3 py-2 transition hover:text-rose-300'>Destination</Link></li>
                    <li><Link href='#' className='relative block px-3 py-2 transition hover:text-rose-300'>Booking</Link></li>
                    <li><Link href='#' className='relative block px-3 py-2 transition hover:text-rose-300'>Activities</Link></li>
                  </ul>
                </nav>
              </div> */}
                            {/* switch */}
                            <div className='flex items-center align'>
                                <div className='pointer-events-auto rounded-3xl text-purple-300 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'>
                                    <ThemeButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;