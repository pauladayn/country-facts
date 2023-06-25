export default function CountriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="flex min-h-screen flex-col items-center justify-center">
        {children}
    </section>
}