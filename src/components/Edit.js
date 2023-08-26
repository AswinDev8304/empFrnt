import React from 'react'
import './Add.css'

function Edit() {
  return (
    <div>
      <div>
        <h3 style={{ color: '#2d0d80' }} className='text-center mt-3'>Edit Employee Details</h3>

        <form id='d' class='container  p-5 w-75 mt-2'>
          <div class=' p-2 text-center'>
            <img id='d' class="rounded-circle " style={{ height: '140px', width: '15%' }}
              src="https://i.postimg.cc/K8y9HpQt/istockphoto-1154642632-612x612.jpg" alt="" />

          </div>

          <div className="row">
            <div className="col-6">
              <label for="exampleInputFname" class="form-label mt-3">First Name</label>
              <input required type="text" class="form-control" id="exampleInputFname" />
              <label for="exampleInputEmail" class="form-label mt-3">Email</label>
              <input required type="email" class="form-control" id="exampleInputEmail" />
              <label class='mt-3' htmlFor="">gender</label> <br />
              <div className='ms-3'>
                <input  name='gender' type="radio" id='m' /> <label class="form-label mt-2 ms-2" htmlFor="m">male</label> <br />
                <input name='gender' type="radio" id='f' /><label class="form-label mt-1 ms-2" htmlFor="f">female</label>

              </div>
              <label class="form-label mt-3" htmlFor="">Choose Profile Picture</label> <br />
              <input required type="file" className='form-control' />

            </div>
            <div className="col-6">
              <label for="exampleInputLname" class="form-label mt-3">Last Name</label>
              <input required type="text" class="form-control" id="exampleInputLname" />

              <label for="exampleInputMobile" class="form-label mt-3">Mobile Number</label>
              <input required type="text" class="form-control" id="exampleInputMobile" />

              {/* dropdown */}
              <label for="exampleI" class="form-label mt-4">Employee Status</label>

              <select class="dropdown w-100 form-control" name="" id="" >
                <option class="dropdown-item disabled" aria-disabled="true" value="">Select ...</option>

                <option class="dropdown-item" value="">Active</option>
                <option class="dropdown-item" value="">Inactive</option>
              </select>   <br />

              <label for="exampleInputLoc" class="form-label mt-3">Location</label>
              <input required type="text" class="form-control" id="exampleInputLoc" />



            </div>
          </div>
          <div className='text-center mt-5'>
            <button style={{ backgroundColor: '#2d0d80', color: 'white' }}
              type="submit" class="btn btn-primary w-50">Update Details</button>

          </div>            </form>
      </div>

    </div>
  )
}

export default Edit
