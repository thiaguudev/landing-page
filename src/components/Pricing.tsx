import PricingItem from "./PricingItem";

export default function Pricing() {
  return (
    <section className="p-5 flex flex-col justify-center items-center w-full gap-[60px] mx-auto">
      <div className="text-center">
        <h3 className="text-[38px] font-bold -tracking-tight">Nossos planos</h3>
      </div>
      <div className="flex-col sm:flex-row items-center gap-3 justify-center space-y-4 flex-wrap w-full">
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
