'use client'
import { useState } from 'react';
import { Card } from '../molecules/Card';
import { CountryData } from '@/app/types/model/CountryType';
import usePagination from '@/app/hooks/usePagination';

export const CardsGrid = ({ countryList, foundedResults }: { countryList: CountryData[], foundedResults: number }) => {
    const [initialPage, setInitialPage] = useState(1)
    const { currentPageContent, currentPage, handleNextPage, handlePrevPage, maxItems } = usePagination(countryList, foundedResults, initialPage, setInitialPage)


    return (
        <>
            <div className='grid place-items-center gap-9 md:grid-cols-2 lg:grid-cols-3 py-8'>
                {currentPageContent.map((content: CountryData, index: number) =>
                (
                    <Card
                        key={index}
                        title={content.name.common}
                        subtitle={content.capital}
                        language={content.languages}
                        currencies={content.currencies}
                        timezone={content.timezones}
                        link={content.maps}
                        image={content.flags}
                    />
                )
                )}
                <div className="flex justify-center gap-3 p-3">
                    {currentPage > 1 && <button onClick={handlePrevPage} className="rounded-full bg-purple-300 py-2 px-5 text-white shadow-md">Back</button>}
                    {currentPage === maxItems ? <p>You have reached all the results</p> : <button onClick={handleNextPage} className="rounded-full bg-purple-300 py-2 px-5 text-white shadow-md">Next</button>}
                </div>
            </div>
        </>
    )
}