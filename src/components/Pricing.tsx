import PricingItem from "./PricingItem";

export default function Pricing() {
  return (
    <section className="bg-gray-200 p-10">
      <div className="flex gap-5 justify-center">
        <PricingItem
          title="Starter"
          value="59,90"
          items={["1 usuário", "Pesquisas por Email, Site", "Notificações App"]}
        />
        <PricingItem
          isMoreUse
          title="Plus"
          value="99,90"
          items={[
            "3 usuários",
            "Pesquisas por Email, Site",
            "Notificações App, Email",
            "Agendamento das pesquisas",
          ]}
        />
        <PricingItem
          title="Business"
          value="179,90"
          items={[
            "10 usuários",
            "Pesquisas por Email, Site",
            "Notificações App, Email",
            "Agendamento das pesquisas",
            "Relatórios",
          ]}
        />
      </div>
    </section>
  );
}
