import React, {useState} from "react"

function MyComponent() {
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);
    
    const updateName = () => {
        setName("SpongeBob");
    }

    const updateAge = () => {
        setAge(age +1);
    }

    const updateEmployed = () => {
        setEmployed(!isEmployed);
    }

    return(<div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Incremet Age</button>

            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={updateEmployed}>Toggle</button>
        </div>)
}

export default MyComponent