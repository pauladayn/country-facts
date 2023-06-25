import Link from 'next/link';
import { CardType } from '@/app/types/components/CardType';
import { Poppins } from 'next/font/google';
import { CardTitle } from '../atoms/CardTitle';
import { CardImage } from '../atoms/CardImage';
import { CardDescriptionItem } from '../atoms/CardDescriptionItem';
import { transformApiData } from '@/app/utils/transformApiInfo';

export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const Card = ({ title, subtitle, language, currencies, timezone, image, link }: CardType) => {

    const getCurrency = currencies && Object.keys(currencies).map(currency => ({ values: currencies[currency as keyof typeof currencies], currency }))

    const languageInfo = language && transformApiData(language)

    return (
        <div className='container pointer-events-auto max-w-xs transition-all hover:scale-105'>

            <div
                className='container rounded-2xl bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 p-4'
            >
                <div className='flex flex-col justify-center'>
                    {image &&
                        <div className='mx-auto'>
                            <CardImage image={image} />
                        </div>
                    }
                    <CardTitle title={title} subtitle={subtitle} />
                    <div className={`grid place-items-center gap-3 ${poppins.className}`}>
                        <p className='text-xs'>{languageInfo && languageInfo?.length > 1 ? 'Main Languages' : 'Main language'}</p>
                        <div className='min-w-full cursor-pointer rounded-full   bg-white dark:bg-transparent px-3 py-2 text-center hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white dark:ring-teal-300 dark:ring-1 dark:hover:bg-white dark:hover:text-purple-500'>
                            {languageInfo && languageInfo?.length > 1 ? (
                                <div className='flex justify-around items-center'>
                                    {
                                        languageInfo.slice(0, 3).map((lang, index) => (<p className='full-rounded text-sm' key={index}>{lang}</p>))}</div>)
                                :
                                (<p className='text-sm'>{languageInfo?.toString() || languageInfo || '---'}</p>)}
                        </div>
                        <CardDescriptionItem title='Currencies'>

                            {`${getCurrency ? getCurrency[0].currency : '-'} ${getCurrency ? getCurrency[0].values['name'] : '-'} - ${getCurrency ? getCurrency[0].values['symbol'] : ''}`}
                        </CardDescriptionItem>
                        <CardDescriptionItem title='Timezone'>{timezone.slice(0, 3)}</CardDescriptionItem>
                    </div>
                    {/* actions */}
                    <div className='my-6 flex justify-center gap-3'>
                        {link && (
                            <Link className='text-white' href={`${link.googleMaps ? link?.googleMaps : link.openStreet}`} target='_blank'>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}