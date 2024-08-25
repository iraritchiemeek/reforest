import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen items-center justify-center relative bg-black flex-wrap gap-10">
      <Image
        src="/forest.jpeg"
        alt="bg"
        fill
        className="object-cover opacity-60"
      />
      <div className="z-10 flex flex-col gap-2 text-center items-center p-8">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20 inline-block mb-4">
          Coming Soon
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-white">
          Reforest Aotearoa
        </h1>
        <h2 className="mt-6 text-lg leading-8 text-gray-200">
          Empowering Kiwis to restore our native forests.
          <br /> Join us in our efforts for education, conservation, and reforestation.
        </h2>
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-6 overflow-hidden px-6 sm:px-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-2xl text-center">
            Get notified when we launch.
          </h2>
          <SubscribeForm />
        </div>
      </div>
    </main>
  );
}
