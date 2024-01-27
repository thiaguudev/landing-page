import PricingItem from "./PricingItem";

export default function Pricing() {
  return (
    <section className="p-10 flex justify-center items-center bg-emerald-500">
      <div className="flex-col sm:flex-row items-center gap-5 justify-center space-y-4 flex-wrap w-full">
        <PricingItem
          title="Starter"
          description="O melhor pra uso pessoal"
          value="59,90"
          items={["1 usuário", "Pesquisas por Email, Site", "Notificações App"]}
        />
        <PricingItem
          isMoreUse
          title="Plus"
          description="O melhor pra pequenos times"
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
          description="O melhor pra grandes empresas"
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
