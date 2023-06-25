import { getAllCountries, getCountryByCapital, getCountriesByName } from '../services/CountriesData';
import { CardsGrid } from '../components/organisms/CardsGrid';

export default async function CountriesData({ searchParams }: { searchParams: { q: string } }) {
    const search = searchParams.q ? searchParams.q : '';

    const allCountries = await getAllCountries();
    const totalResults = allCountries.length ?? 1

    const countryByCapital = search.length && await getCountryByCapital(search)
    const countryByName = search.length && await getCountriesByName(search)

    return (
        <CardsGrid countryList={allCountries} foundedResults={totalResults} />
    )
}