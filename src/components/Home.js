import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TableC from './TableC'
import SpinnerC from './SpinnerC'
import { deleteContext, registerContext } from '../employeeContext/ContextShare'
import { getAllEmployees, removeEmployee } from '../service/allApis'


function Home() {

    // state to store search data
    const [search,setSerach]=useState("")

    // state to store all employees
    const [allEmployees,setAllEmployees]=useState([])

    // to get context
    const { registerData, setRegisterData } = useContext(registerContext)
    const {deleteData,setDeleteData}=useContext(deleteContext)


    // state to handle the spin
    const [showSpin, setSpin] = useState(false)

    // api call to get all employees
    const getEmployees=async()=>{
       const response= await getAllEmployees(search)
       setAllEmployees(response.data);
    }

    // console.log(allEmployees);

    // function to delete employee
    const deleteEmployee=async (id)=>{
        const {data} =await removeEmployee(id)

        // store in delete context
        setDeleteData(data)

        // refresh the table content
        getEmployees()
    }

    // console.log(search);
    useEffect(() => {

        getEmployees()

        setTimeout(() => {
            setSpin(true)
        }, 1000)

    }, [search])
    // use effect will work according to the search state 
    
    return (
        <div>

            {
            registerData?<div onClose={()=>setRegisterData("")} class="alert alert-success alert-dismissible fade show" role="alert">
                {registerData.fname} Added Successfully..
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>:""
            }
            {
            deleteData?<div onClose={()=>setDeleteData("")} class="alert alert-success alert-dismissible fade show" role="alert">
                {deleteData.fname} deleted Successfully..
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>:""
            }

            <div id='d' class="mb-3 w-25 ms-5 mt-5">
                <input onChange={e=>setSerach(e.target.value)} placeholder='search employee' type="email" class="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class='text-end me-5'>
                <Link to={"/add"}>
                    <button id='d' style={{ backgroundColor: '#2d0d80', color: 'white' }} class='btn p-3'>Add Employee <i class="fa-solid fa-user-plus fa-fade"></i></button>

                </Link>
            </div>
            <div>
                {
                    showSpin ? <TableC employees={allEmployees} removeEmp={deleteEmployee}></TableC> : <SpinnerC></SpinnerC>
                }
            </div>


        </div>

    )
}

export default Home
