export default function Metrics() {
  return (
    <section className="my-[100px] mx-auto max-w-[1246px]">
      <div className="flex flex-col gap-[60px] w-full">
        <div className="text-center">
          <h3 className="text-[38px] font-bold -tracking-tight">
            Nossas métricas contam a nossa história
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            <span className="inline-block w-1 h-full bg-[#009379]" />
            <div>
              <p className="font-bold text-[38px]">2k+</p>
              <p>Clientes satisfeitos</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="inline-block w-1 h-full bg-[#009379]" />
            <div>
              <p className="font-bold text-[38px]">3M+</p>
              <p>Pesquisas respondidas</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="inline-block w-1 h-full bg-[#009379]" />
            <div>
              <p className="font-bold text-[38px]">96+</p>
              <p>Empresas atendidas</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="inline-block w-1 h-full bg-[#009379]" />
            <div>
              <p className="font-bold text-[38px]">197+</p>
              <p>Times cadastrados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
