import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const FileNotification = () => {
  return (
    <div className="flex justify-between border border-gray-100 rounded-xl p-4">
      <div className="flex flex-row gap-2">
        <Image
          src="/assets/images/avatar.png"
          width={80}
          height={80}
          className="w-14 h-14 rounded-full"
          alt="File"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">CV Document</p>
          <p className="opacity-50 text-sm">Oct 18th December</p>
          <p className="opacity-50 text-sm">From: Cynthia</p>
        </div>
      </div>
      <Menu className="w-4 h-4 text-gray-600" />
    </div>
  );
};

export default FileNotification;
