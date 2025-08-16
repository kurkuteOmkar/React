import "./product.css"
import Price from "./price.jsx";
function Production({title,idx}){
let discription=[["8,000 DPT","5 Programming buttons"],["intuitive surface","Designed for iPad Pro"],["designed for iPad Pro","intuitive surface"],["wireless","Optical orientation"]];
let oldPrice=["12,495","11,900","1,599","599"]
let newPrice=["8,999","9,199","899","278"]
let styles={

}
    return <>
    <div className="product">
    <h3>{title}</h3>
    <h4>{discription[idx][0]}</h4>
    <h4>{discription[idx][1]}</h4>
    <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    </>
}
export default Production