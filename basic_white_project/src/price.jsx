export default function Price({oldPrice,newPrice}){
    let oldprice={
        textDecoration:"line-through", 
    }
    let newprice={
       fontWeight:"bold",
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        width:"300px",
        // margin:"0 10px"
        borderBottomLeftRadius:"25px",
        borderBottomRightRadius:"25px"
    }
    return <div style={styles}>
        <span style={oldprice}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newprice}>{newPrice}</span>
    </div>
}