"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import Link from "next/link";
import {
  AppWindow,
  File,
  ImageIcon,
  LucideIcon,
  PieChart,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Item {
  title: string;
  url: string;
  icon: LucideIcon;
}

const navs: Item[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: AppWindow,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: File,
  },
  {
    title: "Images",
    url: "/images",
    icon: ImageIcon,
  },
  {
    title: "Media",
    url: "/media",
    icon: VideoIcon,
  },
  {
    title: "Others",
    url: "/others",
    icon: PieChart,
  },
];

const AppSidebar = () => {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar
      className={cn("bg-card", {
        "px-3 pt-4": open,
      })}
      collapsible="icon"
    >
      {open && (
        <SidebarHeader className="bg-card">
          <Image
            src="/assets/images/storelogored.png"
            alt="login"
            width={124}
            height={82}
            className="cursor-pointer h-auto w-[200px] text-primary"
          />{" "}
        </SidebarHeader>
      )}
      <SidebarContent className="pt-8 bg-card">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navs.map((item, index) => (
                <SidebarItem
                  key={index}
                  item={item}
                  active={pathname === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {open && (
        <SidebarFooter className="bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
             
              <div className="flex flex-col gap-1">
                <div className="text-secondary-foreground font-semibold text-[12px]">
                  Cynthia Umwali
                </div>
                <div className="text-[10px] text-accent-foreground">
                  cynthia@gmail.com
                </div>
              </div>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
};

const SidebarItem = ({ item, active }: { item: Item; active: boolean }) => {
  const { open } = useSidebar();
  return (
    <SidebarMenuItem data-active={active} key={item.title} className={cn("hover:bg-primary/50 rounded-full", {"bg-primary rounded-full": active && open})}>
      <Link
        title={item.title}
        href={item.url}
        className={cn(
          "flex items-center gap-4 py-4",
          { "pl-4": open },
          { "justify-center": !open }
        )}
      >
        <item.icon
          data-active={active}
          className={cn("text-card-foreground ", {
            "text-card": active,
          })}
          size={20}
        />

        {open && (
          <span
            data-active={active}
            className={cn(
              "font-medium capitalize transition-all duration-300",
              { "font-semibold text-card": active }
            )}
          >
            {item.title}
          </span>
        )}
      </Link>
    </SidebarMenuItem>
  );
};

export default AppSidebar;
