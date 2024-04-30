const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="card w-[19rem]  bg-base-100 shadow-lg mt-4 mb-5 hover:scale-105 duration-150">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body bg-slate-100">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline cursor-pointer hover:bg-orange-300">
              ${item.price}
            </div>
            <div className="badge badge-outline cursor-pointer hover:bg-orange-300">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
