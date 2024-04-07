"use client";

import DeviceAndBrowser from "@/components/DeviceAndBrowser";
import Header from "@/components/Header";
import IpAndLocation from "@/components/IpAndLocation";

export default function Home() {
  return (
    <main className='mt-4 md:mt-10 lg:mt-20'>
      <Header />
      <div className='mx-auto mt-4 grid w-fit grid-cols-1 gap-12 rounded-lg border-2 border-slate-100 bg-slate-100 p-8 shadow-lg md:grid-cols-2'>
        <IpAndLocation />
        <DeviceAndBrowser />
      </div>
    </main>
  );
}
