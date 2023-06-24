export default function CountriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className='grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>{children}</section>
}