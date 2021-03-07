import React , {useEffect , useState } from 'react'
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import { FaTrash , FaEdit , } from "react-icons/fa";

export default function About() {
    const [user , setUser] = useState([]);
    const [search , setSearch] = useState("");
    let textInput = React.createRef();


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((data => {
            data.json().then(result => {
                setUser(result)
            })
        }))
         
    },[]);

    function handleChange() {
        setSearch(textInput.value)
    }

    function handleSubmit() {
        console.log(search);
    }

    return (
        <div className="wrapper">
            <Header/>
            <main className="main bg-light px-5">
                <div className="">
                   <h1 className="text-center mb-5 display-1">About us</h1>
                    <form className="d-flex align-items-center justify-content-end py-5">
                        <input type="search" placeholder="search.." ref={textInput} className="bordeerd rounded form-control mw-50" style={{maxWidth: "400px"}} />
                        <button className="btn btn-primary ml-4" onClick={handleSubmit} type="submit" >Search</button>
                    </form>
                   <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th> 
                                <th>
                                    email
                                </th>   
                                <th>
                                    address
                                </th>
                                <th>
                                    phone
                                </th>
                                <th>
                                    website
                                </th>
                                <th>
                                    company
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                user.map((item , i)=>
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
                                        <td>{item.address.city}</td>
                                        <td>{item.phone}</td>
                                        <td><a href={`http://${item.website}`}>{item.website}</a></td>
                                        <td>{item.company.name}</td>
                                        <td>
                                            <button className="btn mr-1"><FaTrash/></button>
                                            <button className="btn"><FaEdit/></button>
                                        </td>
                                    </tr>
                                )
                            }
                            
                        </tbody>
                   </table>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
