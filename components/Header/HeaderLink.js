import { useSession, signOut } from "next-auth/react";

function HeaderLink({ Icon, text, avatar, feed, active, hidden }) {
  const { data: session } = useSession();
  
  return (
    <div 
      className={`cursor-pointer flex flex-col justify-center items-center 
        ${hidden && "hidden md:inline-flex"} 
        ${active && "!text-black dark:!text-white "}
        ${feed ? "text-[#00000099] hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5"
        : "text-gray-500 hover:text-gray-700" }`}
        onClick={() => avatar && signOut()}
    >
      {/* icon */}
      {avatar ? <Icon className="!h-5 !w-5 lg:!mb-1" src={session?.user?.image} />: <Icon /> }
      {/* text */}
      <h4 className={`text-xs ${feed && "hidden lg:flex justify-center w-full mx-auto"}`}>{ text }</h4>
      {/* line under icon */}
      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  )
}

export default HeaderLink