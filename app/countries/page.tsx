import { getAllCountries} from '../services/CountriesData';
import { CardsGrid } from '../components/organisms/CardsGrid';

export default async function CountriesData() {
    const allCountries = await getAllCountries();
    const totalResults = allCountries.length ?? 1


    return (
        <div className="flex min-h-screen flex-col items-center p-24 justify-center">
            <CardsGrid countryList={allCountries} foundedResults={totalResults} />
        </div>

    )
}