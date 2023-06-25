import { getAllCountries} from '../services/CountriesData';
import { CardsGrid } from '../components/organisms/CardsGrid';

export default async function CountriesData() {
    const allCountries = await getAllCountries();
    const totalResults = allCountries.length ?? 1


    return (
        <div className="p-6">
            <CardsGrid countryList={allCountries} foundedResults={totalResults} />
        </div>

    )
}