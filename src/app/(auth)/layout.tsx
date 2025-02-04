import React from "react";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-primary p-10 items-center justify-center hidden lg:flex xl:w-2/5 w-1/2">
        <div className="flex flex-col max-h-[800px] max-w-[430px] items-cente space-y-12 ">
          <Image
            src="/assets/images/storelogo.png"
            alt="login"
            width={224}
            height={82}
            className="cursor-pointer h-auto w-[200px]"
          />
          <div className="space-y-5 text-card">
            <h1 className="text-4xl font-extrabold">
              Manage your files the effective way
            </h1>
            <p className="text-md">
              Awesome, We created the perfect place for you to store all your
              documents.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/files.png"
              width={324}
              height={324}
              alt="login"
              className="transition hover:rotate-2 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="bg-card flex flex-1 flex-col items-center lg:justify-center p-4 py-10 lg:py-0 lg:p-10">
        <div className="mb-6 lg:hidden">
          <Image
            src="/assets/images/storelogo.png"
            alt="login"
            width={224}
            height={82}
            className="cursor-pointer h-auto"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default layout;
