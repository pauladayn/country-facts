'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex min-h-screen flex-col items-center p-8 lg:p24 justify-center'>
            <h2 className='text-center text-2xl py-3'>Something went wrong!</h2>
            <p className='text-center p-3'>Maybe try typing the country in english...</p>
            <Link href='/explore' className='rounded-full bg-zinc-900 p-3 shad
            '>Try again</Link>
        </div>
    )
}