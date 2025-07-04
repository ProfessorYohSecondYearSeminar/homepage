import React from "react";

const basePath = process.env.NODE_ENV === 'production' ? '/homepage' : '';

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: "#24377C" }}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img 
          src={`${basePath}/160531091017_1.jpg`}
          alt="My Photo" 
          width={300}
          height={200} 
          className="rounded-md"
        />
        <h1 className="text-white text-2xl font-bold">
          Welcome to Our Yoh Second Year Seminars Site
        </h1>
      </main>
    </div>
  );
}
