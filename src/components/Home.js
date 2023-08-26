import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TableC from './TableC'
import SpinnerC from './SpinnerC'


function Home() {

    // state to handle the spin
    const [showSpin,setSpin]=useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setSpin(true)
        },1000)

    },[])
    return (
        <div>
            <div id='d' class="mb-3 w-25 ms-5 mt-5">
                <input placeholder='search employee' type="email" class="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class='text-end me-5'>
                <Link to={"/add"}>
                    <button id='d' style={{ backgroundColor: '#2d0d80', color: 'white' }} class='btn p-3'>Add Employee <i class="fa-solid fa-user-plus fa-fade"></i></button>

                </Link>
            </div>
            <div>
                {
                    showSpin?<TableC></TableC>:<SpinnerC></SpinnerC>
                }
            </div>
            

        </div>

    )
}

export default Home
