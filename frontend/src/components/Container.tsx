import React from 'react'
// import "../styles/container.css";
import "../App.css";
interface IContainer{
    title:string;
    text:string ;
    Image:React.FunctionComponent<React.SVGProps<SVGSVGElement>>; 

}
const Container = ({title , text , Image}:IContainer) => {
  return (
    <div className='container'>
        <Image width={50} height={50}/>
        <h2>{title}</h2>
        <p>{text}</p>

      
    </div>
  )
}

export default Container
