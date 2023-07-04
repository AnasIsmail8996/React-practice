
import File from './components/File'
 import Card  from './components/Card'
import './App.css'
import UseState from './components/UseState';
//import UseStateAndProps from './components/UseStateAndProps';


// import img1 from './images/Apple-iPhone-14-A2649-US-Unlocked-Blue.webp'
// import img2 from './images/IT-marketing.jpeg'
// import img3 from './images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'


 import img1 from './images/Apple-iPhone-14-A2649-US-Unlocked-Blue.webp'
 import img2 from './images/what-is-product-marketing.jpg'
 import img3 from './images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'
 import img4 from './images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'
 import img5 from './images/How-Can-Digital-Marketing-Work-For-Your-Business.jpg'

function App(){
  return(
    <div>
      <div className='d-flex flex-wrap justify-content-start'>
       <Card image={img1} title='My new Lounch' color='lightpink'/>
       <Card image={img2} title='My new Lounch' color='lightgreen'/>
       <Card image={img2} title='My new Lounch'/>
       <Card image={img3} title='My new Lounch'/>
       <Card image={img3} title='My new Lounch'/>
       <Card image={img5} title='My new Lounch'/>
       <Card image={img4} title='My new Lounch'/>
       <Card image={img5} title='My new Lounch'/> 
       <File/>
       
      </div>
      </div>
    
  )
}

    
  




// function App(){
  
  
  
  
//   return(
//     <div>
// <div className='d-flex flex-wrap justify-content-center'> 
// <Card image={img1} title='My new Product'/>
// <Card image={img2} title='My Old'/>
// <Card image={img3} title='My new Best'/>
// </div>
//   <File/>
 
//   </div>
//   )
// }

    {/* //  <div className='d-flex flex-wrap justify-content-center'>
    //    <Card image={img1} title="Product 1"/>
    //   <Card image={img2} title="Product 2"/> 
    //    <Card image={img3} title="Product 3"/>
    //  </div> */}
   
 


// function App() {
//   return(
//     // <UseState/>
//     <div className='vh-100 d-flex flex-column justify-content-center'>
//     <UseStateAndProps/>
//     <hr className="border border-danger"/>
//     <UseStateAndProps/>
//     <hr className="border border-danger"/>
//     <UseStateAndProps/>
//     </div>
//   )
// }



export default App ;
