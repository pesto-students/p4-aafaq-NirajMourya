import {useState} from "react";
function Form(props){
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        name.trim() === '' ? alert('Please enter a task name') : props.addTask(name);
        setName("");
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo-input"
          name="text"
          value={name}
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit">
          Add
        </button>
      </form>
    )
}

export default Form;