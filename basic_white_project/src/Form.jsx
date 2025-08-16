function clicked(){
    console.log("Your form submitted successfully");
}
 function Form(){
    return <div>
        <form action="">
            Enter name<input type="text" />
            <button onClick={clicked}>Submit</button>
        </form>
    </div>
}
export default Form;