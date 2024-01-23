export default function Metrics() {
  return (
    <section className="my-[100px]">
      <div className="flex flex-col gap-[60px]">
        <div className="text-center">
          <h3 className="text-[38px] font-bold -tracking-tight">
            Our Metrics Tell the Story
          </h3>
          <p>
            Our metrics component gives you the inside scoop on your success and
            helps you stay on top of your game in style.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="font-bold text-[38px]">10k+</p>
            <p>Website launched</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">931k+</p>
            <p>Projects created with Anima</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">240k+</p>
            <p>New users joined Anima</p>
          </div>
          <div className="">
            <p className="font-bold text-[38px]">12k+</p>
            <p>Teams used Anima</p>
          </div>
        </div>
      </div>
    </section>
  );
}
