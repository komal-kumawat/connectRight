
interface IButton{
    color:string;
    bgColor:string;
    text:string;
}
const Button = ({color , bgColor , text}:IButton) => {
  return (
    <div className="Button" style={{color:color , backgroundColor:bgColor ,padding:"7px 10px" ,borderRadius:"8px"  ,margin:"5px" , display:"inline-block" , border:"1px solid", cursor:"pointer" } }>
        {text}
      
    </div>
  )
}

export default Button
