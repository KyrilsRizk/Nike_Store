
const Button = ({label , iconURL , backgroundColor , textColor , borderColor,fullWidth  }) => {
  return (
   <button className= {`flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg  border leading-none 
   
   ${
    backgroundColor
     ? `${backgroundColor}
        ${textColor}
        ${borderColor}`
     :  "bg-coral-red  text-white  border-slate-gray" 
      } rounded-full ${fullWidth && `w-full`}  " } `}
       >
    {label}
    
    { iconURL && <img src={iconURL}
     alt="arrow right icon " 
     className=" ml-2 rounded-full w-5 h-5 " />}
   </button>
  )
}

export default Button