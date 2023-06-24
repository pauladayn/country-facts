import { getAllCountries, getCountryByCapital, getContriesByName } from '../services/CountriesData';

export default async function CountriesData() {
    const allCountries = await getAllCountries();

    const totalResults = allCountries.length ?? 1

    return (
        <div>estoy en la pagina de countries</div>
    )
}