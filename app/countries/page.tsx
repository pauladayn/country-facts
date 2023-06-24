import { getAllCountries, getCountryByCapital, getContriesByName } from '../services/CountriesData';
import { CardsGrid } from '../components/organisms/CardsGrid';

export default async function CountriesData() {
    const allCountries = await getAllCountries();

    const totalResults = allCountries.length ?? 1

    return (
        <CardsGrid countryList={allCountries} foundedResults={totalResults} />
    )
}