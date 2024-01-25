import { title } from "process";

type PricingItemProps = {
  title: string;
};

function PricingItem(props: PricingItemProps) {
  return <div>{title}</div>;
}

export default function Pricing() {
  return (
    <section>
      <div className="flex gap-5">
        <PricingItem title="Free" />
        <PricingItem title="Starter" />
        <PricingItem title="Business" />
      </div>
    </section>
  );
}
