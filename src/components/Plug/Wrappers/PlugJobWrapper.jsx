import Input from "../Input/Input"

const PlugJobWrapper = (Component) => {

  return (...props)=>{
     return(
        <div style={{marginTop:"6rem"}}>
            <Input />
            <Component {...props} />
        </div>
     )
  }
}

export default PlugJobWrapper