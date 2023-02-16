import Image from "next/image";
import TimeAgo from "timeago-react";
import { useSession } from "next-auth/react";
//  icons
import InfoIcon from "@mui/icons-material/Info";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

function Widgets({ articles }) {
    const { data: session } = useSession();

    return (
        <div className="hidden xl:inline space-y-2">
            {/* News */}
            <div 
                className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2 w-10/12 overflow-hidden 
                    border border-gray-300 dark:border-none"
            >
                {/* title */}
                <div className="flex items-center justify-between font-semibold px-2.5">
                    <h4>LinkedIn News</h4>
                    <InfoIcon className="h-5 w-5" />
                </div>
                {/* articles */}
                <div className="space-y-1">
                    {articles.slice(0, 5).map((article) => (
                        <div
                            key={article.url}
                            className="space-x-2 hover-bg px-2.5 py-1"
                        >
                            <div className="flex space-x-2 items-center">
                                <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
                                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                                {article.title}
                                </h5>
                            </div>
                            <TimeAgo
                                datetime={article.publishedAt}
                                className="text-xs mt-0.5 pl-2 dark:text-white/75 opacity-80"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Ads */}
            <div className="bg-white dark:bg-[#1D2226] w-10/12 h-auto px-2.5 py-3 rounded-lg sticky 
                top-20 border border-gray-300 dark:border-none space-y-2">
                <div className="flex justify-end">
                    <p className="text-sm">Ad</p>
                    <MoreHorizIcon className="hover:cursor-pointer"/>
                </div>
                <div className="flex text-xs justify-center">
                    {session?.user?.name}, stay informed on industry news and trends
                </div>
                <div className="flex justify-center space-x-4">
                    <img src={session?.user?.image} alt="avatar" className="rounded-full w-12 h-12"/>
                    <img 
                        src={"https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"} 
                        alt="avatar"
                        className="rounded-full w-12 h-12 hover:cursor-pointer"
                    />
                </div>
                <div className="flex flex-col text-center">
                    <p>{session?.user?.name}, you might like to follow </p>
                    <span className="font-semibold">Linkedin</span>
                </div>
                <div className="flex justify-center">
                    <button className="text-[#0A66C2] font-semibold rounded-full border-2 border-[#0A66C2] px-5 
                            py-1.5 transition-all hover:bg-[#eaf3fc] hover:text-[#064380]">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Widgets