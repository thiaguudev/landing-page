import { Check, Sparkles, X } from "lucide-react";

type PricingItemProps = {
  title: string;
  value: string;
  items: string[];
  description?: string;
  isMoreUse?: boolean;
};

export default function PricingItem({
  title,
  value,
  items,
  description,
  isMoreUse,
}: PricingItemProps) {
  return (
    <div className={`relative grow basis-[300px] flex-1 min-h-[360px] max-w-[300px] w-full  ${isMoreUse && ""}`}>
      {/* {isMoreUse && (
        <div className="lg:hidden flex z-50 text-center absolute -top-7 left-0 w-full max-w-[288px] h-8 font-bold text-white bg-[#009379] justify-center gap-2 items-center rounded-t-sm">
          Mais popular <Sparkles />
        </div>
      )} */}
      <div
        className={`h-full bg-white pt-6 px-4 pb-4 rounded-sm relative${
          isMoreUse && "border-solid border-2 border-[#009379]"
        }`}
      >
        <p className="text-xl font-bold">{title}</p>
        {description && <p className="text-sm">{description}</p>}
        <p className="mt-8">
          <span className="text-3xl font-bold">R${value}</span> /mês
        </p>
        <button className="px-5 py-3 my-10 text-white bg-[#009379] font-semibold rounded-sm h-[42px] max-w-[256px] w-full flex items-center justify-center">
          Testar 7 dias grátis
        </button>
        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex gap-1">
                <Check color="#009379" /> {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
