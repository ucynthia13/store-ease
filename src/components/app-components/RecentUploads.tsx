import React from "react";
import fileData from "@/constants";
import FileNotification from "./FileNotification";
const RecentUploads = () => {
  return (
    <div className="rounded-2xl shadow-sm hidden lg:block w-1/2 bg-card p-6">
      <h1 className="text-2xl font-bold pb-8">Recent Files Uploaded</h1>
      <div className="flex flex-col gap-6">
        {fileData.map((file, index) => (
          <FileNotification 
          key={index}
          image={file.image}
          name={file.name}
          date={file.date}
          author={file.author}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;
