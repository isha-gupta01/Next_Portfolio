import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

export const Footer = () => {
  return (
    <footer className="relative  z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] opacity-30 -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            <Link target="blank" href="https://github.com/isha-gupta01" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">GitHub</span>
              <ArrowUpRightIcon className="size-4"/>
            </Link>
            <Link target="blank" href="https://www.linkedin.com/in/isha-gupta-49aba9278/" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRightIcon className="size-4"/>
            </Link>
            <Link target="blank" href="mailto:ishaguptavnsv@gmail.com" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Email</span>
              <ArrowUpRightIcon className="size-4"/>
            </Link>
            <Link target="blank" href="https://x.com/isha_gupta120" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">Twitter</span>
              <ArrowUpRightIcon className="size-4"/>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
};
