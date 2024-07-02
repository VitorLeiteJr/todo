
interface inputProps{
  name: string,
  type: string,
  placeholder?: string,
  value?: string,
  defaultvalue?: string
}

const Input = ({name, type, placeholder,value,defaultvalue}: inputProps) => {
  return (
   <>
   <input className="w-full p-2 border-gray-200 border" 
   name={name}
   type={type}
   value={value}
   defaultValue={defaultvalue}
   placeholder={placeholder}/>
   </>
  )
}

export default Input