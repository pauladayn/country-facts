import { ThemeButton } from '../atoms/ThemeButton';
import Link from 'next/link';

const Header = () => {

    return (
        <header className='z-50 flex flex-col'>
            <div className='z-10 h-18 pt-6'>
                <div className='relative px-4 sm:px-8 lg:ps-12 lg: pe-5'>
                    <div className='w-full lg:max-w-2xl mx-auto'>
                        <div className='dark:bg-zinc-900 bg-purple-300 w-full rounded-full py-2 shadow-lg'>
                            <div className='flex justify-between items-center'>
                                <Link href='/' className='text-sm lg:text-2xl ps-5 font-bold  text-purple-600 dark:text-white'>Country facts</Link>
                                <div className='text-white flex items-center gap-2 w-full ms-3 md:ms-auto md:max-w-xs'>
                                    <Link href='/explore' className='text-sm'>explore</Link>
                                    <Link href='/countries' className='text-sm px-3'>all countries</Link>
                                </div>
                                <div className='ms-auto me-5 pointer-events-auto rounded-3xl text-white bg-purple-600 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-purple-400 dark:ring-white/10 dark:hover:ring-white/20'>
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