import Image from "next/image";

export default function Features() {
  return (
    <section className="mt-[120px]">
      <div className="flex flex-col gap-[60px]">
        <div className="text-center">
          <h3 className="text-[38px] font-bold -tracking-tight">Features</h3>
          <p>
            Few good reasons why you should use Anima Landing Page Ui Kit to
            make your own pages.
          </p>
        </div>
        <div className="flex gap-[30px] justify-center">
          <div className="w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">Fast building</h4>
            <p>
              Tailor Animas Landing Page UI Kit to your unique style and brand
              with customisable components, in no time!
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>

          <div className="w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon1.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">Responsive Design</h4>
            <p>
              No need to worry about screen size. Animas Landing Page UI Kit
              adapts to any screen size, from desktop to mobile.
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>

          <div className="w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon2.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">No Code Needed</h4>
            <p>
              Zero coding skills required, Animas Landing Page UI Kit empowers
              you to create stunning landing pages with ease.
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
