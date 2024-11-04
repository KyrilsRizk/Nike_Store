import { star } from "../assets/icons"
function PopularProductCard({ imgURL , name , price}) {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL } alt={name} className="w-[310px] h-[250px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={29} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray font-bold">( 4.4 ) </p>
        
      </div>
      <h3 className="mt-2 ml-6 text-2xl leading-normal font-semibold font-palanquin">{ name}</h3>
        <p className="mt-2 ml-6 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{ price}</p>
    </div>
  )
}

export default PopularProductCard