import { Poppins } from "next/font/google";
export const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const CardTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <>
        <div className={`text-center ${poppins.className} my-5 text-white`}>
            <h4 className='text-lg'>{title}</h4>
            <p className='text-sm'>{subtitle}</p>
        </div>
    </>
) 