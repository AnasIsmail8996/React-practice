//  import img1 from '../images/IT-marketing.jpeg'

// function Card(props) {
//     return(
//         <div className="card m-2 border border-danger">
//                 <img className='card-img-top' src={props.image}/>
//             <div className='card-body'>
//                 <h3>{props.title}</h3>
//                 <p>testsetsetsetstestetsetstetsetstetstetsetstetsesadasdaasdadsd</p>
//                 <button className='btn btn-primary mt-3'>Buy Product</button>
//             </div>
//         </div>
//     )
// }


function Card(props){
    return(
        <div className="card m-5 border border-info ">
<img className="card-img-top" src={props.image}/>
<h3>{props.title}</h3>
<p>Anas ismail hz Lounch this Product</p>

<button className="btn btn-info" style={{ backgroundColor: props.color }}>Order & Buy</button>
        </div>
    )
}





export default Card;