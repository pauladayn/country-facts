'use client'
import { useRouter, usePathname } from 'next/navigation';
import { ThemeButton } from '../atoms/ThemeButton';

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleBackNavigation = () => {
        router.back()
    }
    
    return (
        <header className='z-50 flex flex-col'>
            <div className='z-10 h-18 pt-6'>
                <div className='relative px-4 sm:px-8 lg:ps-12 lg: pe-5'>
                    <div className='max-w-2xl lg:max-w-2xl mx-auto'>
                        <div className='dark:bg-zinc-900 bg-purple-300 w-full rounded-full py-2 shadow-lg'>
                            <div className='flex justify-between items-center'>
                                {pathname !== '/' && <button className='ps-5 text-sm' onClick={handleBackNavigation}>
                                    go back
                                </button>}

                                <p className='text-2xl font-extrabold px-5 text-purple-600 dark:text-white ms-auto'>Country facts</p>
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