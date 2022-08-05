const InputField= ({
    label,
    onChange,
    fieldValue,
    placeHolder
}) => {
    return (
    
        <div>
            
            <input type="text" 
             
            onChange={(event) => onChange(event.target.value)}
            
            value={ fieldValue } 
            placeholder={placeHolder}
            />
           
            
                    

        </div>

        
    )
}

export default InputField;