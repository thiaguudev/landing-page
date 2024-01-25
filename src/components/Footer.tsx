import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-20 bg-black flex items-center justify-center">
      <div className="flex justify-between items-center px-[60px] w-full max-w-[1246px]">
        <p className="text-white text-sm">© 2024 Survey Apoli. </p>
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/survey.apoli">
            <Image src="/Social Icons (1).svg" width={32} height={32} alt="" />
          </Link>
          <Link href="#">
            <Image src="/Social Icons (3).svg" width={32} height={32} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
