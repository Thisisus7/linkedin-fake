import { Avatar } from "@mui/material"
import { signOut, useSession } from "next-auth/react"
import Image from "next/legacy/image"
// icon
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function Sidebar() {
    const { data: session } = useSession();

    return (
        <div className="space-y-2 min-w-max max-w-lg">
            {/* Top half */}
            <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex
                flex-col items-center text-center border border-gray-300 dark:border-none">
                {/* bg */}
                <div className="relative w-full h-14">
                    <Image src="https://media.licdn.com/dms/image/C4D16AQHIYbuMFz2a3w/profile-displaybackgroundimage-shrink_200_800/0/1636211153572?e=1681948800&v=beta&t=jl1pivFoh5Lr_GmOVRWQeL4xhy1QhYzkdCbjeTXyZ7g" layout="fill" priority />
                </div>
                <Avatar
                    onClick={signOut}
                    src={session?.user?.image}
                    className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
                />
                {/* top */}
                <div className="mt-5 py-4 space-x-0.5">
                    <h4 className="hover:underline decoration-purple-700 underline-offset-2 cursor-pointer">
                    {session?.user?.name}
                    </h4>
                    <p className="text-black/60 dark:text-white/75 text-sm">{session?.user?.email}</p>
                </div>
                {/* middle */}
                <div className="hidden md:inline text-left text-black/60 dark:text-white/75 text-sm">
                    <div className="font-medium sidebar-button">
                        <div className="flex justify-between py-1 px-2 space-x-2 hover-bg">
                            <h4>Connections</h4>
                            <span className="text-blue-500 justify-end">2,023</span>
                        </div>
                        <div className="flex justify-between py-1 px-2 space-x-2 hover-bg">
                            <h4>Who viewed your profile</h4>
                            <span className="text-blue-500 justify-end">123</span>
                        </div>
                    </div>
                    {/* bottom */}
                    <div className="sidebarButton hover-bg group">
                        <h4 className="leading-4 text-xs">
                            Access exclusive tools & insights
                        </h4>
                        <h4 className="dark:text-white underline font-medium text-[#000000] space-x-0.5 group-hover:text-[#173598]">
                            <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />
                            Try Premium for free
                        </h4>
                    </div>
                    <div className="sidebarButton flex items-center space-x-1.5 hover-bg">
                        <BookmarkOutlinedIcon className="!-ml-1" />
                        <h4 className="dark:text-white font-medium">My items</h4>
                    </div>
                </div>
            </div>
            {/* Bottom  half */}
            <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/70 
                dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky 
                top-20 border border-gray-300 dark:border-none">
                <p className="sidebarLink">Groups</p>
                <div className="flex items-center justify-between">
                    <p className="sidebarLink w-full">Events</p>
                    <AddRoundedIcon className="!h-7 !w-7 p-1 hover-bg rounded-full" />
                </div>
                <p className="sidebarLink">Followed Hashtags</p>
                <div className="sidebarButton text-center hover-bg">
                    <h4 className="dark:text-white font-medium text-sm ">Discover More</h4>
                </div>
            </div>
        </div>
    )
}

export default Sidebar