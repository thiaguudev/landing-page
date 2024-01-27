import Image from "next/image";

export default function Features() {
  return (
    <section className="mt-[120px] max-w-[1246px] mx-auto">
      <div className="flex flex-col gap-[60px] max-w-[1246px]">
        <div className="text-center">
          <h3 className="text-[38px] font-bold -tracking-tight">
            Nossos serviços
          </h3>
          <p>
            Aqui estão alguns dos motivos pelos quais você deve hoje mesmo
            começar a usar a <strong>Survey Apoli</strong> e impulsionar o seu
            negócio.
          </p>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-center items-center">
          <div className="flex-1 basis-40 min-w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon2.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">Coleta de feedback</h4>
            <p>
              Transforme opiniões em insights valiosos. Nossa ferramenta
              simplifica a coleta de feedbacks, fornecendo uma visão clara das
              percepções dos clientes.
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>
          <div className="flex-1 basis-40 min-w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon2.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">Notificações</h4>
            <p>
              Fique sempre atualizado. Receba notificações instantâneas sobre
              novos feedbacks, garantindo uma resposta rápida às necessidades
              dos seus clientes.
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>
          <div className="flex-1 basis-40 min-w-[370px] h-[384px] flex flex-col gap-5 items-center text-center bg-[#FFFFFF] rounded-2xl px-[30px] py-10">
            <Image src="/icon1.png" alt="Icon 1" width={82} height={82} />
            <h4 className="text-[28px] font-semibold">Dashboard de Dados</h4>
            <p>
              Controle total em um único lugar. Nosso dashboard intuitivo
              oferece uma visão abrangente e em tempo real dos dados de
              pesquisa, permitindo decisões informadas e estratégicas.
            </p>
            <p className="text-[#009379]">Learn More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
