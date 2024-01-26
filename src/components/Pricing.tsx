import { Check } from "lucide-react";

type PricingItemProps = {
  title: string;
  value: number;
  items: string[];
};

function PricingItem({ title, value, items }: PricingItemProps) {
  return (
    <div className="bg-white pt-6 px-4 pb-4 rounded-sm">
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">O melhor pra uso pessoal</p>
      <p className="mt-8">
        <span className="text-3xl font-bold">R${value}</span> /mês
      </p>
      <button className="px-5 py-3 my-10 text-white bg-[#009379] font-semibold rounded-sm h-[42px] w-[256px] flex items-center justify-center">
        Quero começar agora
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

export default function Pricing() {
  return (
    <section>
      <div className="flex gap-5 justify-center items-center">
        <PricingItem
          title="Free"
          value={0}
          items={[
            "Task Management",
            "Project Planning",
            "Team Collaboration",
            "Notifications and Reminders",
          ]}
        />
        <PricingItem
          title="Starter"
          value={8}
          items={[
            "Task Management",
            "Project Planning",
            "Team Collaboration",
            "Notifications and Reminders",
          ]}
        />
        <PricingItem
          title="Business"
          value={16}
          items={[
            "Task Management",
            "Project Planning",
            "Team Collaboration",
            "Notifications and Reminders",
          ]}
        />
      </div>
    </section>
  );
}
