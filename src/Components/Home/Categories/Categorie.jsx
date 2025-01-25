
const Categorie = ({icon, name, items}) => {
  return (
    <div className=" p-2 h-[180px] w-[120px] space-y-2 hover:text-primary cursor-pointer">
      <img className="rounded-full h-[100px] w-[100px] mx-auto" src={icon} alt="" />
     <div>
     <h1 className="text-center font-semibold">{name}</h1>
     <p className="text-center text-sm">{items} products</p>
     </div>
    </div>
  )
}

export default Categorie
