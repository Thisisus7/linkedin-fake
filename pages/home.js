import Head from "next/head"
import Image from "next/legacy/image"
import { getProviders, signIn } from "next-auth/react";
// icon
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WorkIcon from '@mui/icons-material/Work';

import HeaderLink from "../components/Header/HeaderLink"

function home({ providers }) {
    return (
        <div className="space-y-8 relative">
            <Head>
                <title>LinkedIn: Log In or Sign Up</title>
                <link rel="icon" href="/lin.jpg" />
            </Head>
            {/* Header */}
            <header className="flex justify-around items-center py-4">
                {/* Left side */}
                <div className="relative w-28 h-10">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                {/* Right side */}
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={PeopleAltIcon} text="People" />
                        <HeaderLink Icon={CastForEducationIcon} text="Learning" />
                        <HeaderLink Icon={WorkIcon} text="Jobs" />
                    </div>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <div className="pl-4 space-x-1">
                                <button
                                    className= "text-gray-500 font-semibold rounded-full px-5 py-2 transition-all hover:bg-[#F3f2EF] hover:text-black"
                                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                                >
                                    Join now
                                </button>
                                <button
                                    className="text-[#0A66C2] font-semibold rounded-full border-2 border-[#0A66C2] px-5 py-1.5 transition-all hover:bg-[#eaf3fc] hover:text-[#064380]"
                                    onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </header>
            {/* content */}
            <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
                {/* Left section */}
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-4xl md:text-5xl text-[#8F5849] max-w-xl !leading-snug font-light pl-4 xl:pl-0">
                        Welcome to your professional community
                    </h1>
                    <div className="space-y-4">
                        <div className="intent">
                            <h2 className="text-xl text-[#000000E6]">Explore topics you are interested in</h2>
                            <ArrowForwardIosIcon className="text-[gray-700]" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl text-[#B24020]">Find the right job or internship for you</h2>
                            <ArrowForwardIosIcon className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl text-[#8F5849]">Let the right people know you’re open to work</h2>
                            <ArrowForwardIosIcon className="text-gray-700" />
                        </div>
                    </div>
                </div>
                {/* Right section */}
                <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 -right-12">
                    <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
                </div>
            </main>
        </div>
    )
}

export default home

export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
  }