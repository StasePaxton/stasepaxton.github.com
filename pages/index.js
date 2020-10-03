import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stase Paxton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto grid grid-cols-12 gap-5 pt-10 mb-24">
        <div className="col-span-6">
          <img src="/svg/character.svg" style={{maxHeight: 30 + 'rem'}} />
        </div>

        <div className="col-start-7 col-span-6">
          <p className="text-6xl">
            <strong>Hi!</strong> <span className="font-light">My name is <strong>Stase.</strong></span>
          </p>

          <br />

          <p className="text-4xl">I'm a Storyteller.</p>
          <p className="text-4xl">
            <strong>UI Designer</strong> by day,<br />
            nerd by night.
          </p>
        </div>
      </section>

      <section className="container mx-auto mb-24">
        <div className="flex justify-between items-center mb-16">
          <strong className="text-5xl">Latest Design Projects</strong>
          <Link href="/design"><a className="text-xl text-gold">See More</a></Link>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="text-gray-700 bg-gray-400 h-64"></div>
          <div className="text-gray-700 bg-gray-400"></div>
          <div className="text-gray-700 bg-gray-400"></div>
        </div>
      </section>

      <section className="container mx-auto mb-24">
        <div className="flex justify-between items-center mb-16">
          <strong className="text-5xl">Latest Art Projects</strong>
          <Link href="/art"><a className="text-xl text-gold">See More</a></Link>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="text-gray-700 bg-gray-400 h-64"></div>
          <div className="text-gray-700 bg-gray-400"></div>
          <div className="text-gray-700 bg-gray-400"></div>
        </div>
      </section>

      <section className="container mx-auto mb-24 grid grid-cols-3 grid-rows-3 grid-flow-col gap-1">
        <div className="row-span-2 col-span-2">
          <strong className="text-5xl">Wanna Work Together?</strong>
          <p className="font-thin text-4xl">I'd love to hear from you!</p>
        </div>

        <div className="row-span-1 col-span-2">
          <div className="flex justify-start">
            <strong><Link href="mailto:stase@stasepaxton.com"><a className="mr-16 text-gold text-4xl underline">Email Me</a></Link></strong>
            <strong><a className="text-gold text-4xl underline" href="#">Download Resume</a></strong>
          </div>
        </div>

        <div className="row-span-3 bg-gray-400"></div>
      </section>
    </>
  )
}