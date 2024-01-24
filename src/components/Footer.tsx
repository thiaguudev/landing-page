import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-20 bg-[#2D2D2D] flex items-center">
      <div className="flex justify-between items-center px-[60px] w-full">
        <p className="text-white text-sm">© 2024 Survey Apoli. </p>
        <div className="flex gap-4">
          <Link href="#">
            <Image src="/Social Icons.svg" width={32} height={32} alt="" />
          </Link>
          <Link href="#">
            <Image src="/Social Icons (1).svg" width={32} height={32} alt="" />
          </Link>
          <Link href="#">
            <Image src="/Social Icons (2).svg" width={32} height={32} alt="" />
          </Link>
          <Link href="#">
            <Image src="/Social Icons (3).svg" width={32} height={32} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
