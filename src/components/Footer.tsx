import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-20 bg-black flex items-center justify-center">
      <div className="flex justify-between items-center px-[60px] w-full max-w-[1246px]">
        <p className="text-white text-sm">© 2024 Survey Apoli. </p>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/survey.apoli"
            target="_blank"
            className="w-10 h-10 bg-[#009379] flex items-center justify-center rounded-full"
          >
            <Instagram fill="white" />
          </Link>
          <Link
            href="https://www.instagram.com/survey.apoli"
            target="_blank"
            className="w-10 h-10 bg-[#009379] flex items-center justify-center rounded-full"
          >
            <Facebook fill="white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
