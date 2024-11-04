import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col w-full max-container gap-10" > 
    <div className="flex flex-1 flex-col"> 
      
      <h2 className=" font-palanquin capitalize text-4xl  font-bold lg:max-w-lg ">
        we provide you  <br />
        <span className=" text-coral-red  mt-1"> super </span> 
        <span className=" text-coral-red  mt-4">Quality</span> shoes
      </h2>
      <p className=" mt-6 lg:max-w-lg info-text font-semibold">""Our meticulous craftsmanship ensures optimal performance in every aspect, from stitching to material selection. With precise support structures and high-quality materials, we guarantee excellence in every step. Experience unparalleled dedication and unwavering commitment to quality in our running shoes."</p>
      <p className=" mt-6 lg:max-w-lg info-text font-semibold">Experience unparalleled dedication to detail in every step of our meticulously crafted Super Quality Running Shoes.""</p>
      <div className="mt-11">

      <Button label="view details" />

    </div>
      </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
          </div>
    </section>
  )
}

export default SuperQuality