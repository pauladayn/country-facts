import Link from "next/link"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p24 justify-center">
      <div className="container text-center">
        <h1 className='text-4xl font-extrabold lg:text-6xl'>Country facts</h1>
        <div className="mx-auto mt-5 max-w-lg text-center flex flex-col gap-6">
          <h4 className="text-2xl">facts about countries provided by:
              <Link href='https://restcountries.com' target="_blank" className="text-purple-600 font-bold">
                {` https://restcountries.com`}
              </Link>
          </h4>
          <Link href='/explore' className="bg-zinc-900 p-3 rounded-full text-white mt-3 hover:shadow-xl">
            Get started
          </Link>
        </div>
      </div>
    </main>
  )
}
