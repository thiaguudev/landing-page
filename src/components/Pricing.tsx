import PricingItem from "./PricingItem";

export default function Pricing() {
  return (
    <section>
      <div className="flex gap-5 justify-center items-center">
        <PricingItem
          title="Free"
          value="0"
          items={[
            "Task Management",
            "Project Planning",
            "Team Collaboration",
            "Notifications and Reminders",
          ]}
        />
        <PricingItem
        isMoreUse
          title="Starter"
          value="59,90"
          items={[
            "Task Management",
            "Project Planning",
            "Team Collaboration",
            "Notifications and Reminders",
          ]}
        />
        <PricingItem
          title="Business"
          value="99,90"
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
