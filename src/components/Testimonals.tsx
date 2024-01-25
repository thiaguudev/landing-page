import Image from "next/image";

export default function Testimonals() {
  return (
    <section className="mt-[100px]">
      <div className="flex justify-between items-center gap-5">
        <div className="flex items-start justify-center gap-2  w-[485px] rounded-[20px] py-7 px-9 bg-white">
          <Image src="/e1.png" alt="" width={57} height={57} />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <strong className="text-2xl">Martin Goutry</strong>
              <span className="text-[#B9B9B9]">
                Back-end developer at MyDodow
              </span>
            </div>
            <span>
              Dico is finally addressing a long time problem we had when
              building UIs. Its ease of use and workflow seems really intuitive.
              Promising!
            </span>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2  w-[485px] rounded-[20px] py-7 px-9 bg-white">
          <Image src="/e1.png" alt="" width={57} height={57} />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <strong className="text-2xl">Martin Goutry</strong>
              <span className="text-[#B9B9B9]">
                Back-end developer at MyDodow
              </span>
            </div>
            <span>
              Dico is finally addressing a long time problem we had when
              building UIs. Its ease of use and workflow seems really intuitive.
              Promising!
            </span>
          </div>
        </div>
        <div className="flex items-start justify-center gap-2  w-[485px] rounded-[20px] py-7 px-9 bg-white">
          <Image src="/e1.png" alt="" width={57} height={57} />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <strong className="text-2xl">Martin Goutry</strong>
              <span className="text-[#B9B9B9]">
                Back-end developer at MyDodow
              </span>
            </div>
            <span>
              Dico is finally addressing a long time problem we had when
              building UIs. Its ease of use and workflow seems really intuitive.
              Promising!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
