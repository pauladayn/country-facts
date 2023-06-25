import { CountryData } from "@/app/types/model/CountryType"
import { CardImage } from "../../atoms/CardImage"


export const TitleAndDescription = ({ title, description }: { title: string, description: string }) => (
    <>
        <p className="text-sm text-teal-300 font-bold">{title}</p>
        <p className="text-xl">{description}</p>
    </>
)

export const CountryDetail = ({ country }: { country: CountryData }) => {

    const flagInfo = country.flags?.alt ? country.flags?.alt : 'Sorry! There is no available information about this flag'
    return (
        <>
            <div>
            <h1 className='text-2xl font-extrabold lg:text-4xl my-8 text-center'>{country.name.official}</h1>
                <div className="container max-w-md bg-transparent p-4 rounded-2xl mx-auto shadow-lg">
                    <div className="flex items-center justify-center gap-8">
                        <CardImage image={country.flags} />
                    </div>
                    <p className="py-5 text-md">{`About the flag: ${flagInfo}`}</p>
                    <div className="flex flex-col gap-2 mt-auto">
                        <TitleAndDescription title="Country name and capital" description={`${country.name.common} - ${country.capital}`} />
                        <TitleAndDescription title="Official name" description={country.name.official} />
                        <TitleAndDescription title='Population' description={`${country.population} people`} />
                        <TitleAndDescription title="Suffix" description={`${country?.idd?.root}${country?.idd?.suffixes}`} />
                    </div>
                </div>
            </div>
        </>
    )
}