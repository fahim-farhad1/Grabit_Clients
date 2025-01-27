import addbanner from "../../assets/banner/1.jpg";

const Adds = () => {
  return (
    <div
      className={"w-full bg-cover h-[450px] rounded mt-10"}
      style={{ backgroundImage: `url(${addbanner})` }}
    >
      <div className="flex flex-col items-end justify-center h-full mx-20 space-y-3">
        <p className="text-5xl text-secondary text-end font-semibold w-[400px]">
          Fresh Fruits Healthy Products
        </p>
        <span className="flex items-center text-3xl font-semibold gap-2">
        <p className="text-primary">30% off sale</p>
        <p>Hurry up!!!</p>
        </span>
        <button className="bg-primary px-3 py-2 rounded text-white">Shop now</button>
      </div>
    </div>
  );
};

export default Adds;
