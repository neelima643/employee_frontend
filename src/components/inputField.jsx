const InputField= ({
    label,
    onchange,
    fieldValue,
    placeHolder,
    type = 'text',
    className = 'text',
    divname
}) => {
    return (
    
        <div className={divname}>
            
            <label> { label }</label>
            <input type={type} className={className} onChange = {(event) => onchange(event.target.value)} value={ fieldValue } placeholder={placeHolder} />
      
        </div>

        
    )
}

export default InputField;