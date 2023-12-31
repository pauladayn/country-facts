import { SearchBar } from '../components/molecules/SearchBar';
import Link from 'next/link';

export default function SearchCountry() {

    return (
        <div className="flex min-h-screen flex-col items-center p-12 justify-center">
            <h1 className='text-2xl py-3'>Search by country</h1>
            <SearchBar />
            <div>
                <Link href='/countries'>
                    <div className='flex items-center p-3'>
                        <p className='p-3'>
                            Not sure where to start? See the full list here
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}