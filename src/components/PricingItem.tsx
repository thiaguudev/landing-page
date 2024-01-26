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
    <div
      className={`h-full min-h-[360px] bg-white pt-6 px-6 pb-4 rounded-sm relative ${
        isMoreUse && "border-solid border-2 border-[#009379]"
      }`}
    >
      {/* {isMoreUse && <div className="text-center text-white bg-[#009379] w-full flex font-semibold justify-center gap-3 absolute top-0 left-0 rounded-t-sm"><span>Mais popular</span><Sparkles /></div>} */}
      <p className="text-xl font-bold">{title}</p>
      {description && <p className="text-sm">{description}</p>}
      <p className="mt-8">
        <span className="text-3xl font-bold">R${value}</span> /mês
      </p>
      <button className="px-5 py-3 my-10 text-white bg-[#009379] font-semibold rounded-sm h-[42px] w-[256px] flex items-center justify-center">
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
  );
}
