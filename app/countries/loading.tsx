import { Skeleton } from "../components/molecules/Skeleton/Skeleton"


export default function Loading() {
    // Or a custom loading skeleton component
    const emptyArray = [...Array(9).keys()]
    return <>
        <div className="grid place-items-center gap-9 md:grid-cols-2 lg:grid-cols-3 py-8">
            {emptyArray.map((index: number) => (
                <Skeleton key={index} />
            ))}
        </div>
    </>
}