import Filter from "@/components/app-components/Filter";
import React from "react";
import FileCard from "@/components/app-components/FileCard";
import fileData from "@/constants";
const Media = () => {
  return (
    <div className="p-4 lg:p-8 bg-slate-50 h-full m-4 lg:m-8 rounded-2xl">
      <h1 className="text-md md:text-xl lg:text-3xl font-extrabold">Media</h1>
      <div className="flex justify-between my-4">
        <p className="">
          Total: <span className="font-bold">12GB</span>
        </p>
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {fileData.map((file, index) => (
                      <FileCard
                        key={index}
                        image={file.image}
                        name={file.name}
                        size={file.size}
                        date={file.date}
                        author={file.author}
                      />
                    ))}
      </div>
    </div>
  );
};

export default Media;
