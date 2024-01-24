export default function Metrics() {
  return (
    <section className="my-[100px]">
      <div className="flex flex-col gap-[60px]">
        <div className="text-center">
          <h3 className="text-[38px] font-bold -tracking-tight">
            Nossas métricas contam a nossa história
          </h3>
          <p>
            Our metrics component gives you the inside scoop on your success and
            helps you stay on top of your game in style.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="font-bold text-[38px]">2k+</p>
            <p>Clientes satisfeitos</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">3M+</p>
            <p>Pesquisas respondidas</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">96+</p>
            <p>Empresas atendidas</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">197+</p>
            <p>Times usando a Survey Apoli</p>
          </div>
        </div>
      </div>
    </section>
  );
}
