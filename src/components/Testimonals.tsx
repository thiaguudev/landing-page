import TestimonalItem from "./TestimonialItem";

export default function Testimonals() {
  return (
    <section className="mt-[100px] max-w-[1246px] flex flex-col justify-center items-center p-2 gap-[60px] mx-auto">
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
          Adotar essa ferramenta foi um game changer. Analisamos feedbacks de
          forma mais natural e entendemos as expectativas dos clientes de
          maneira direta. Simples e impactante!
        </TestimonalItem>
        <TestimonalItem
          name="João Arthur"
          job="Gerente de Operações"
          pictureSrc="/e2.png"
        >
          Inovação prática e eficaz. Com a Survey Apoli, entendemos clientes de
          maneira rápida e obtivemos resultados reais.
        </TestimonalItem>
        <TestimonalItem
          name="Ana Claúdia"
          job="CEO de uma Startup de Tecnologia"
          pictureSrc="/e3.png"
        >
          Usar essa ferramenta foi transformador. Feedbacks agora são uma mina
          de ouro para melhorias rápidas. Recomendo!
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
