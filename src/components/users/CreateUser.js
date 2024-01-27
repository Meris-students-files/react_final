import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [file,setFile] = useState(null)
    const handleFileChange = (ev) =>{
        setFile(ev.target.files[0])
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(inputs)
        axios.post('http://react/api/user/save', data).then(function(response){
            console.log(response.data);
            // navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input type="text" name="email" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Image: </label>
                            </th>
                            <td> 
                                <input type="file" name="image" />
                            </td>
                        </tr>
                        
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}