import React from 'react'

function TableC() {
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>+910987678909</td>
                            <td>
                                <div style={{ backgroundColor: '#2d0d80', color: 'white', borderRadius: '20px' }}
                                    class='w-50 text-center p-2'>Active</div>
                            </td>
                            <td>
                                <img id='d' style={{ height: '50px', borderTopRightRadius: '20px' }}
                                    src="https://i.postimg.cc/J4TjXXvN/photo-1633332755192-727a05c4013d.jpg" alt="" />
                            </td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-list-ul fa-fade"></i>
                                    </button>
                                    <ul class="dropdown-menu" style={{ backgroundColor: '#2d0d80' }}>
                                        <li>
                                            <a style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item" href="/view/1">
                                                <i class="fa-solid ms-3 fa-1x fa-book-open-reader fa-fade"></i>  <b>View </b>
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item" href="/edit/1">
                                                <i class="fa-solid ms-3 fa-1x  fa-user-pen fa-fade"></i> <b>Edit </b>
                                            </a>
                                        </li>
                                        <li>
                                            <a style={{ textDecoration: 'none', color: 'white' }} class="dropdown-item" href="#">
                                                <i class="fa-solid ms-3 fa-1x fa-user-minus fa-fade"></i>  <b>Delete</b>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>       

    </div>
  )
}

export default TableC
