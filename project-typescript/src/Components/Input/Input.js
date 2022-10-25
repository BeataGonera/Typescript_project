

export const Input = ({labelText, inputType, setInputValue}) => {

    const handleChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    }

    return ( 
        <form>
            <label htmlFor="input">{labelText}</label>
            <input id="input" type={inputType} onChange={handleChange}/>
        </form>
     );
}
 
