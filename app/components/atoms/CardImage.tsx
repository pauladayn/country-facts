import { CardImageType } from "@/app/types/components/CardType"
import Image from 'next/image';

export const CardImage = ({ image }: { image: CardImageType }) => (
    <div className='mt-8 grid h-36 w-36 place-items-center rounded-full shadow-lg'>
        {image && <Image priority alt={image?.alt || 'country flag'} src={image?.png} height={96} width={96} />}
    </div>
)