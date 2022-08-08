const TextField = (props) => { 
    const {label, text} =  props;
    return (
        
        // <div classname="labeldiv"> {label} </div>

        <div className="boxdetail">
            
        <label className="label1"> { label }</label> <br/>
        <label className="label2"> { text } </label> 
       
        
                

    </div>

    );
    /*const { label, handleClick } = props;
    return (
        <button onClick={ () => handleClick()} > { label } </button>
    );*/


}

export default TextField;