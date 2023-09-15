import React from 'react'
import BASE_URL from '../service/base_url'
import { Link } from 'react-router-dom'


function TableC({ employees, removeEmp }) {
    return (
        <div>
            <div className='w-75 container mt-5' style={{ color: '#2d0d80' }}>
                <h2 class='text-start mb-4'>Employee Details</h2>

                <table id='d'
                    class="table fs-5 table-primary mt-3 table-striped">
                    <thead>
                        <tr >
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">No</th>
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">Full Name</th>
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">Mobile</th>
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">Status</th>
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">Profile</th>
                            <th style={{ backgroundColor: '#2d0d80', color: 'white' }} scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees?.length > 0 ? employees.map((i, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{i.fname + " " + i.lname}</td>
                                    <td>{i.mobile}</td>
                                    <td>
                                        <div style={{ backgroundColor: '#2d0d80', color: 'white', borderRadius: '20px' }}
                                            class='w-50 text-center p-2'>{i.status}</div>
                                    </td>
                                    <td>
                                        <img id='d' style={{ height: '50px', borderTopRightRadius: '20px' }}
                                            src={`${BASE_URL}/uploads/${i.profile}`} alt="" />
                                    </td>
                                    <td>
                                        <div class="dropdown">
                                            <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa-solid fa-list-ul fa-fade"></i>
                                            </button>
                                            <ul class="dropdown-menu" style={{ backgroundColor: '#2d0d80' }}>
                                                <li>
                                                    <Link to={`/view/${i._id}`}>
                                                        <a style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item"  >
                                                            <i class="fa-solid ms-3 fa-1x fa-book-open-reader fa-fade"></i>  <b>View </b>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`/edit/${i._id}`}>
                                                        <a style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item" >
                                                            <i class="fa-solid ms-3 fa-1x  fa-user-pen fa-fade"></i> <b>Edit </b>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <div onClick={() => removeEmp(i._id)} style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item" >
                                                        <i class="fa-solid ms-3 fa-1x fa-user-minus fa-fade"></i>  <b>Delete</b>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                            )) : <p> No Employees Are Present</p>}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default TableC
