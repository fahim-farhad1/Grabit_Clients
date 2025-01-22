
const Categorie = ({icon, name, items}) => {
  return (
    <div className="bg-white rounded p-2 h-[180px] w-[200px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] space-y-2">
      <img className="rounded-full h-[100px] w-[100px] hover:h-[110px] hover:w-[110px] mx-auto hover:border-primary hover:border-[4px] duration-100" src={icon} alt="" />
     <div>
     <h1 className="text-center font-semibold text-secondary">{name}</h1>
     <p className="text-center">{items} products</p>
     </div>
    </div>
  )
}

export default Categorie
