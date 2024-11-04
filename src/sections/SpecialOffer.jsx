import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container  ">
      <div className="flex-1">
        <img src={offer}  width={773} height={687} 
        className="object-contain w-full "
          />
      </div>
      <div className="flex flex-1 flex-col"> 
      
      <h2 className=" font-palanquin capitalize text-4xl  font-bold lg:max-w-lg ">
        we provide you  <br />
        <span className=" text-coral-red  mt-1"> Spacial </span> 
        <span className=" text-coral-red  mt-4">Offer</span> 
      </h2>
      <p className=" mt-6 lg:max-w-lg info-text font-semibold">Step into style, step into savings,
With our unbeatable offers, you'll be craving!
From sneakers to sandals, we've got it all,
Quality footwear that stands tall.</p>
      <p className=" mt-6 lg:max-w-lg info-text font-semibold">Fashion-forward designs at prices so sweet,
Your shoe game will never skip a beat.
Don't miss out on this chance to shine,
Shop now and make every step divine!</p>
      <div className="mt-10 flex flex-wrap gap-6 ">

    <Button
       label="Shop now "
      iconURL={arrowRight} />

    <Button 
       label = "Learn more"
      backgroundColor = "bg-white"
      borderColor = "border-slate-gray"
      textColor = "text-slate-gray"
      iconURL={arrowRight} 
      />

    </div>
    </div>

    </section>
  )
}

export default SpecialOffer