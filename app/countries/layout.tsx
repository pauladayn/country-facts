import Header from '../components/organisms/Header';
export default function CountriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="container">
        <Header />
        {children}
    </section>
}