const InputSelect = ({
    label,
    options
}) => {
    
   
    return (
        
            <select name={label}>
                {options.map((item) => (
                    
              <option value={item.key}>{item.val}</option>
            ))}

console.log(item);
            </select>
      
    )
}


export default InputSelect;