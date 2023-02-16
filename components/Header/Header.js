import Image from "next/legacy/image"
import HeaderLink from "./HeaderLink";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
// icon
import SearchIcon from '@mui/icons-material/Search';
import CottageIcon from '@mui/icons-material/Cottage';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

function Header() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme: currentTheme, theme } = useTheme();  // light, dark and so on

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    console.log("Current theme is", theme);

    return (
        <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around px-3 ">
            {/* Left side */}
            <div className="flex items-center space-x-2 w-full max-w-xs">
                {/* logo */}
                {mounted && (
                    <>
                        {currentTheme === "dark" ? (
                            <Image src="https://rb.gy/bizvqj" width={45} height={45} />
                        ) : (
                            <Image src="https://rb.gy/dpmd9s" width={55} height={55} />
                        )}
                    </>
                )}
                {/* Search */}
                <div className="flex items-center space-x-1  py-2.5 px-4 rounded w-full">
                    <div className="bg-slate-100 focus-within:shadow-lg dark:md:bg-gray-700">
                    <SearchIcon />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow" 
                    />
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className="flex items-center space-x-6">
                <HeaderLink Icon={CottageIcon} text="Home" feed active />
                <HeaderLink Icon={PeopleAltIcon} text="My Network" feed />
                <HeaderLink Icon={WorkIcon} text="Jobs" feed hidden />
                <HeaderLink Icon={SmsIcon} text="Messaging" feed />
                <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
                <HeaderLink Icon={Avatar} text="Me" feed avatar hidden/>
                <HeaderLink Icon={AppsIcon} text="Work" feed hidden />

                {/* Dark mode toggle */}
                {mounted && (
                    <div 
                        className={`bg-gray-100 flex items-center px-0.5 rounded-full h-8 w-16 hover:cursor-pointer
                        flex-shrink-0 relative ${currentTheme === 'dark' ? "justify-start" : "justify-end"}`}
                        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                    >
                        <span className="absolute left-1"><WbSunnyIcon className="text-gray-500"/></span>
                        {/* motion */}
                        <motion.div
                            className="w-7 h-7 bg-gray-500 rounded-full z-40" layout transition={spring}
                        />
                        <span className="absolute right-0.5"><ModeNightIcon className="text-gray-500"/></span>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header