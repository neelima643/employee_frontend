const InputSelect = ({
    label,
    options,
    onchange
}) => {
    
   
    return (
        <div className="box">
            <label> {label } </label>
            <select name={label} onClick= { (event) => onchange(event.target.value)}>
                {options.map((item) => (
                    
              <option value={item.key}>{item.val}</option>
            ))}


            </select>
        </div>
            
      
    )
}


export default InputSelect;