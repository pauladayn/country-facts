'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export const SearchBar = ({ disabled }: { disabled?: boolean }) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const checkParams = useSearchParams();

    const handleSearch = (value: string) => {

        const searchParams = new URLSearchParams(window.location.search);
        if (value) {
            searchParams.set('q', value);
        } else {
            searchParams.delete('q');
        }
        startTransition(() => {
            replace(`${pathname}?${searchParams.toString()}`);
        });
    };

    return (
        <>
            <div className='container ms-auto max-w-md relative'>
                <label htmlFor='search' className='sr-only'>
                    Search
                </label>
                <div className='mx-auto flex items-center rounded-full bg-purple-600 px-3 py-3 shadow-md'>
                    <MagnifyingGlassIcon className='mr-3 h-6 w-6 text-white dark:text-gray-900' aria-hidden='true' />
                    <input
                        type='text'
                        name='search'
                        id='search'
                        disabled={isPending}
                        className='w-full rounded-full py-1 ps-3 focus:border-rose-300 focus:outline-none focus:ring'
                        placeholder='Search...'
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                    />
                    {isPending && (
                        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center me-3">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

