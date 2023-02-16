import { Avatar } from "@mui/material"
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "@/atoms/modalAtom";
// icons
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";


function Input() {
    const { data: session } = useSession();
    const [modalOpen, setModalOpen] = useRecoilState(modalState);  // key
    const [modalType, setModalType] = useRecoilState(modalTypeState); 

    return (
        <div className="bg-white dark:bg-[#1D2226] rounded-lg pt-3 pb-0.5 space-y-0.5 border border-gray-300 dark:border-none w-full">
            <div className="flex items-center space-x-2 px-3">
                <Avatar
                    src={session?.user?.image}
                    className="!h-9 !w-9 cursor-pointer"
                />
                <motion.button
                    whileHover={{ scale: 1.00 }}
                    whileTap={{ scale: 0.99 }}
                    className="rounded-full border border-gray-400 py-2.5 px-3 w-full text-left hover-bg font-semibold"
                    onClick={() => {
                        setModalOpen(true);
                        setModalType("dropIn");
                    }}
                >
                    Start a post
                </motion.button>
            </div>
            {/* 4 buttons */}
            <div className="flex items-center flex-wrap justify-center md:gap-x-2 px-2">
                <button className="inputButton group">
                    <PhotoSizeSelectActualIcon className="text-[#378fe9]" />
                    <h4 className="opacity-80 group-hover:opacity-100 ">Photo</h4>
                </button>
                <button className="inputButton group">
                    <SmartDisplayIcon className="text-[#5f9b41]" />
                    <h4 className="opacity-80 group-hover:opacity-100 ">Video</h4>
                </button>
                <button className="inputButton group">
                    <EventIcon className="text-[#c37d16]" />
                    <h4 className="opacity-80 group-hover:opacity-100 ">Event</h4>
                </button>
                <button className="inputButton group">
                    <FeedIcon className="text-[#e16745]" />
                    <h4 className="opacity-80 group-hover:opacity-100 whitespace-nowrap ">Write Article</h4>
                </button>
            </div>
        </div>
    )
}

export default Input