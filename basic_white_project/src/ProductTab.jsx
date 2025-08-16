import Production from "./Product.jsx";

function hover(events){
    
      alert("you are clicked automatically")
      console.log(events);
    }


function ProductTab(){
return <button onMouseEnter={hover} >Click</button> 
}
export default ProductTab;