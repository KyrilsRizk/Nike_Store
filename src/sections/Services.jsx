import { services } from "../constants"
import ServiceCard from "../components/serviceCard"

const Services = () => {
  return (
   <section className="max-container flex justify-center flex-wrap gap-6">
    {services.map((service) =>( 
      < ServiceCard key={service.label} {...service} />
    ))}
   </section>
  )
}

export default Services