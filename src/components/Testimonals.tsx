import TestimonalItem from "./TestimonialItem";

export default function Testimonals() {
  return (
    <section className="mt-[100px] max-w-[1246px] flex flex-col justify-center items-center p-5 gap-[60px] mx-auto">
      <div className="text-center">
        <h3 className="text-[38px] font-bold -tracking-tight">
          O que dizem nossos clientes?
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-2">
        <TestimonalItem
          name="Roberto Mauro"
          job="Gerente de Experiência do Cliente"
          pictureSrc="/e1.png"
        >
          O produto da Survey Apoli transformou nossa abordagem em relação ao
          feedback do cliente. Antes, era um desafio coletar dados
          significativos, mas agora, com esta solução, obtemos respostas rápidas
          e relevantes. A capacidade de entender as necessidades dos nossos
          usuários de forma tão eficaz mudou completamente o jogo para nós.
        </TestimonalItem>
        <TestimonalItem
          name="João Arthur"
          job="Gerente de Operações"
          pictureSrc="/e2.png"
        >
          A Survey Apoli não apenas fornece uma maneira eficaz de coletar
          feedback, mas também nos ajuda a transformar esses dados em ações
          concretas. Com relatórios detalhados e sugestões prontas para
          implementação, esta ferramenta se tornou fundamental para o nosso
          processo de melhoria contínua. Uma solução completa e inovadora!
        </TestimonalItem>
        <TestimonalItem
          name="Ana Claúdia"
          job="CEO de uma Startup de Tecnologia"
          pictureSrc="/e3.png"
        >
          Desde que começamos a utilizar o produto de coleta de feedback da
          Survey Apoli, nossa interação com os clientes atingiu um novo nível.
          As informações detalhadas e a facilidade de uso nos proporcionaram
          insights valiosos para melhorar continuamente nossos serviços. Uma
          ferramenta indispensável para qualquer empresa que valorize a
          satisfação do cliente!
        </TestimonalItem>
        {/* <TestimonalItem name="Celso Pedro" job="Diretor de Marketing">
          Estamos encantados com a eficácia do produto da Survey Apoli. A
          interface intuitiva facilita a coleta de feedbacks e a análise de
          dados. O suporte ao cliente é excepcional, e as atualizações
          frequentes mostram o compromisso contínuo da Survey Apoli em aprimorar
          sua solução. Recomendo a todos que buscam elevar a experiência do
          cliente!
        </TestimonalItem> */}
      </div>
    </section>
  );
}
