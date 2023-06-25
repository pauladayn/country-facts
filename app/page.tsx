import Link from "next/link"
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="container text-center pt-24">
        <h1 className='text-4xl font-extrabold lg:text-6xl my-8'>Country facts</h1>
        <div className="mx-auto mt-5 max-w-lg text-center flex flex-col gap-6">
          <h4 className="text-2xl">facts about countries provided by <code>https://restcountries.com</code></h4>
          <Link href='/countries' className="bg-zinc-900 p-3 rounded-full text-white mt-3">Get started</Link>
        </div>
      </div>
    </main>
  )
}
