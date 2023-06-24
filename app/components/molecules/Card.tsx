import { CardType } from '@/app/types/components/CardType';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const Card = ({ title, subtitle, language, currencies, timezone, image, link, styleVariant }: CardType) => {
    const getLanguages = language && Object.keys(language).map(lang => language[lang as keyof typeof language])

    return (
        <div className='container pointer-events-auto max-w-xs transition-all hover:scale-105'>
            {/* linktree container */}
            <div
                className={`container rounded-2xl bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 p-4 ${styleVariant}`}
            >
                <div className='flex flex-col justify-center'>
                    <div className='mx-auto mt-8 grid h-36 w-36 place-items-center rounded-full shadow-lg'>
                        {image && <Image priority alt={image?.alt || 'country flag'} src={image?.png} height={96} width={96} />}
                    </div>
                    <div className={`text-center ${poppins.className} my-5 text-white`}>
                        <h4 className='text-lg'>{title}</h4>
                        <p className='text-sm'>{subtitle}</p>
                    </div>
                    <div className={`grid place-items-center gap-3 ${poppins.className}`}>
                        <p className='text-xs'>{getLanguages?.length > 1 ? 'Languages' : 'Main language'}</p>
                        <div className='min-w-full cursor-pointer rounded-full   bg-white px-3 py-2 text-center hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white'>
                            {getLanguages?.length > 1 ? (<div className='flex justify-around items-center'>{getLanguages.map((lang, index) => (<p className='full-rounded text-sm' key={index}>{lang}</p>))}</div>) : (<p className='text-sm'>{getLanguages?.toString()}</p>)}
                        </div>

                        <p className='text-xs'>Currencies</p>
                        <div className='min-w-full cursor-pointer rounded-full bg-white px-3 py-2 text-center hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white'>
                            <button className='text-sm'>Currencies</button>
                        </div>
                        <p className='text-xs'>Timezone</p>
                        <div className='min-w-full cursor-pointer rounded-full bg-white px-3 py-2 text-center hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white '>
                            <button className='text-sm'>{timezone.slice(0, 3)}</button>
                        </div>
                    </div>
                    {/* actions */}
                    <div className='my-6 flex justify-center gap-3'>
                        {/*       {link && (
            <button className='text-white' onClick={`${link?.google}`} target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
              </svg>
            </button>
          )} */}
                        <button className='text-white'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}