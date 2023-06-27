import Input from '../Input/Input';
import Result from '../Result/Result';

const CasingJobWrapper = (CasingComponent, presentCsg, previousCsg, ) => {
    
  const Sub=(props)=>{
  
      return(
          <div style={{marginTop:"6.4rem", textAlign:"center", background:"white",}}>
          <h3 style={{marginBottom:"-1rem", textTransform:"uppercase"}}>{presentCsg} CASING CEMENTING</h3>
          <Result />
          <Input
           presentCsg={presentCsg}
           previousCsg={previousCsg}  
          />
          <CasingComponent 
          {...props} 
          />
        </div>
      )
  }
  return Sub
}

export default CasingJobWrapper