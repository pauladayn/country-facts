import { getCountriesByName } from '../services/CountriesData';

export default async function SearchCountry({ searchParams }: { searchParams: { q: string } }) {
    const search = searchParams.q ? searchParams.q : '';
    /*  const countryByCapital = search.length && await getCountryByCapital(search) */
    const countryByName = search.length && await getCountriesByName(search)
    const result = countryByName[0]
    console.log('by name', countryByName)
    /*    if(!countryByName) return notFound() */
    return (
        <div className="flex min-h-screen flex-col items-center p-24 justify-center">
            <h1 className='text-4xl font-extrabold lg:text-6xl my-8'>Country facts</h1>
            {countryByName && <div>{countryByName[0].name.common}</div>}
        </div>
    )
}