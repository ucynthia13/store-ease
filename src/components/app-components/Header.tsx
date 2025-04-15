import React from "react";
import SearchBar from "./SearchBar";
import FileUploader from "./FileUploader";
import Image from "next/image";

const AppHeader = () => {
  return (
    <header className="sticky flex justify-between pt-8 px-8">
      <SearchBar />
      <div className="flex gap-4">
        <FileUploader />
        <div className="rounded-full bg-primary/20 p-4">
          <Image
          src="/assets/images/logout.png"
          alt="logout"
          className=""
          width={18}
          height={18}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
