import React from 'react'

function View() {
  return (
    <div>
      <div  className='container w-50 mt-5 '>
        <div class='row px-2 py-4' id='d'>
          <div className="col-lg-6 col-12">
            <img class='ms-0' id='d' style={{ width: '100%',height:'400px' }}
              src="https://i.postimg.cc/MG3hsk4R/u3.jpg" alt="" />
          </div>
          <div className="col-lg-6 col-12 py-4 mt-3 fs-5">
            <ul class="list-group">
              <li id='d' class="list-group-item mt-2">
                <span><i class="fa-solid fa-user px-3"></i> Full Name</span> <strong class='ms-2'>Anu S</strong> 
                </li>
              <li id='d' class="list-group-item mt-2">
                <span><i class="fa-solid fa-user-shield px-3"></i> Status</span> <strong class='ms-2'>Active</strong> 
                </li>
              <li id='d' class="list-group-item mt-2">
                <span> <i class="fa-solid fa-phone-volume px-3"></i> Mobile Number</span> <strong class='ms-2'>+919087654321</strong> 
                </li>
              <li id='d' class="list-group-item mt-2">
                <span><i class="fa-solid fa-envelope px-3"></i>Email </span> <strong class='ms-2'>Anus123@gmail.com</strong> 
                </li>
              <li id='d' class="list-group-item mt-2">
                <span> <i class="fa-solid fa-person-half-dress px-3"></i> Gender</span> <strong class='ms-2'>Female</strong>
                 </li>
              <li id='d' class="list-group-item mt-2">
                <span><i class="fa-solid fa-location-dot px-3"></i> Location</span> <strong class='ms-2'>Kochi</strong>
                 </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  )
}

export default View
