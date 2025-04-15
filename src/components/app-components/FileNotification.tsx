import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { FileCardProps } from "@/constants";

const FileNotification = ({ image, name, date, author }: FileCardProps) => {
  return (
    <div className="flex justify-between border border-gray-100 rounded-xl p-4">
      <div className="flex flex-row gap-2">
        <Image
          src={image}
          width={80}
          height={80}
          className="w-14 h-14 rounded-full"
          alt="File"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{name}</p>
          <p className="opacity-50 text-sm">{date}</p>
          <p className="opacity-50 text-sm">{author}</p>
        </div>
      </div>
      <Menu className="w-4 h-4 text-gray-600" />
    </div>
  );
};

export default FileNotification;
