import Image from "next/image";

export default function Integrations() {
  return (
    <section className="grid grid-cols-6 items-center justify-items-center mt-[60px]">
      <Image src="mark1.svg" alt="Spotify" width={64} height={64} />
      <Image src="mark2.svg" alt="Discord" width={64} height={64} />
      <Image src="mark3.svg" alt="Kiwi" width={64} height={64} />
      <Image src="mark4.svg" alt="Dropbox" width={64} height={64} />
      <Image src="mark5.svg" alt="Slack" width={64} height={64} />
      <Image src="mark1.svg" alt="Spotify" width={64} height={64} />
    </section>
  );
}
