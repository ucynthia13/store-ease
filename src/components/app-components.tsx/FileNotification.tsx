import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const FileNotification = () => {
  return (
    <div className="flex justify-between">
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
          <p className="opacity-50">Oct 18th December</p>
        </div>
      </div>
      <Menu className="w-5 h-5" />
    </div>
  );
};

export default FileNotification;
