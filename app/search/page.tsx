import { getCountriesByName } from '../services/CountriesData';
import { CountryDetail } from '../components/molecules/CountryDetail/CountryDetail';

export default async function SearchCountry({ searchParams }: { searchParams: { q: string } }) {
    const search = searchParams.q ? searchParams.q : '';

    const countryByName = search.length && await getCountriesByName(search)
    const result = countryByName[0]


    return (
        <div className="flex min-h-screen flex-col items-center p-24 justify-center">
            <h1 className='text-4xl font-extrabold lg:text-6xl my-8'>Country facts</h1>
            <>
                {search ? (
                    result ? (<CountryDetail country={result} />) : null
                ) : null}
            </>
        </div>
    )
}