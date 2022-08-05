const TextField = (props) => { 
    const {label} =  props;
    return (
        
        <div > {label}</div>
    );
    /*const { label, handleClick } = props;
    return (
        <button onClick={ () => handleClick()} > { label } </button>
    );*/


}

export default TextField;