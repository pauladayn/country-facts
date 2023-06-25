'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { createUrl } from '@/app/utils/createUrl';

export const SearchBar = () => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const checkParams = useSearchParams();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const value = e.target as HTMLFormElement;
        const search = value.search as HTMLInputElement
        const searchParams = new URLSearchParams(checkParams.toString());

        if (search.value) {
            searchParams.set('q', search.value);
        } else {
            searchParams.delete('q');
        }
        startTransition(() => {
            router.push(createUrl('/search', searchParams));
        });

    };

    return (
        <>
            <div className='container max-w-md relative'>
                <label htmlFor='search' className='sr-only'>
                    Search
                </label>
                <div className='mx-auto flex items-center rounded-full bg-purple-300 dark:bg-purple-600 px-3 py-3 shadow-md'>
                    <MagnifyingGlassIcon className='mr-3 h-6 w-6 text-white dark:text-gray-900' aria-hidden='true' />
                    <form className='relative w-full flex items-center' onSubmit={handleSearch}>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            disabled={isPending}
                            defaultValue={checkParams?.get('q') || ''}
                            className='w-full rounded-full py-1 ps-3 focus:border-rose-300 focus:outline-none focus:ring'
                            placeholder='Search...'
                        />
                    </form>
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

