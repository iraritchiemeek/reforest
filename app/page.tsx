import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center relative bg-black flex-wrap gap-10">
      <Image
        src="/forest.jpeg"
        alt="bg"
        fill
        className="object-cover opacity-60"
      />
      <div className="z-10 flex flex-col gap-2 text-center items-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20 inline-block mb-4">
          Coming Soon
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Reforest Aotearoa
        </h1>
        <h2 className="mt-6 text-lg leading-8 text-gray-200">
          Empowering Kiwis to restore our native bush.
          <br /> Read, learn, and plant with us.
        </h2>
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-10 overflow-hidden px-6 sm:rounded-3xl sm:px-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-2xl">
            Get notified when we’re launching.
          </h2>
          <form className="w-full max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/60 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
