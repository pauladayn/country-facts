'use client'
import { useState } from 'react';
import { Card } from '../molecules/Card';
import { CountryData } from '@/app/types/model/CountryType';
import usePagination from '@/app/hooks/usePagination';


export const CardsGrid = ({ countryList, foundedResults }: { countryList: CountryData[], foundedResults: number }) => {
    const [initialPage, setInitialPage] = useState(1)
    const { currentPageContent, currentPage, handleNextPage, handlePrevPage, availablePages } = usePagination(countryList, foundedResults, initialPage, setInitialPage)

    return (
        <>
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
        </>
    )
}