import Image from "next/image";

export default function Integrations() {
  return (
    <section className="grid grid-cols-6 items-center justify-items-center mt-[60px]">
      <Image src="mark1.svg" alt="" width={64} height={64} />
      <Image src="mark2.svg" alt="" width={64} height={64} />
      <Image src="mark3.svg" alt="" width={64} height={64} />
      <Image src="mark4.svg" alt="" width={64} height={64} />
      <Image src="mark5.svg" alt="" width={64} height={64} />
      <Image src="mark1.svg" alt="" width={64} height={64} />
    </section>
  );
}
