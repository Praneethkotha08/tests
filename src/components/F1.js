import "./style.css"
function F1(){
    const style={
        color:"red",
        backgroundColor:"orange"
    }
    return(
        
        <div>
            <h1 style={{color:"blue"}}>Inline Styling</h1>
            <h1 style={style}>Internal Styling</h1>
            <h1 class="c1">External Styling</h1>
            <h1 class="text-center bg-primary text-danger mx-5 py-5">BootStrap Style</h1>
        </div>
    )
}
export default F1;
