import React, { useEffect, useState } from 'react'
import './Add.css'
import { registerApi } from '../service/allApis'


function Add() {

    // state to hold image data
    const [Image, setImage] = useState("")

    // state to store preview image
    const [preview, setPreview] = useState("")

    // state to hold all other input datas enter by user
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        mobile: "",
        status: "",
        location: ""
    })

    // function to update userData 
    const userDetails=(e)=>{
        // let value=e.target.value
        // let name=e.target.name 
        let {value,name}=e.target

        setUserData({...userData,[name]:value})

    }

    console.log(userData);


    // create a function to store image
    const setProfile = (e) => {
        setImage(e.target.files[0]);
    }

    // console.log(Image);

    useEffect(() => {

        if (Image) {
            setPreview(URL.createObjectURL(Image))
        }

    }, [Image])

    // console.log(preview);

    // create a function for submit button
    const handleSubmit=async(e)=>{
        e.preventDefault()

        // header  - contentType:multipart/formData
        const headerConfig={
            "Content-Type":"multipart/form-data"
        }

        // body form data
        const data=new FormData()

        // access datas from userData
        const {fname,lname,email,gender,mobile,status,location}=userData

        // add datas in formdata
        data.append('user_profile',Image)
        data.append('fname',fname)
        data.append('lname',lname)
        data.append('email',email)
        data.append('gender',gender)
        data.append('mobile',mobile)
        data.append('status',status)
        data.append('location',location)

        // api call
        const response=await registerApi(headerConfig,data)
        console.log(response);
        if(response.status==200){
            alert("employee added")
        }
        else{
            alert("employee already present")
        }

    }



    return (
        <div>
            <h3 style={{ color: '#2d0d80' }} className='text-center mt-3'>Create New Employee</h3>

            <form id='d' class='container  p-5 w-75 mt-2'>
                <div class=' p-2 text-center'>
                    <img id='d' class="rounded-circle " style={{ height: '140px', width: '15%' }}

                        src={preview ? preview : "https://i.postimg.cc/K8y9HpQt/istockphoto-1154642632-612x612.jpg"} alt="" />

                </div>

                <div className="row">
                    <div className="col-6">
                        <label for="exampleInputFname" class="form-label mt-3">First Name</label>
                        <input onChange={userDetails} name='fname' required type="text" class="form-control" id="exampleInputFname" />
                        <label for="exampleInputEmail" class="form-label mt-3">Email</label>
                        <input onChange={userDetails} name='email' required type="email" class="form-control" id="exampleInputEmail" />
                        
                        <label class='mt-3' htmlFor="">gender</label> <br />
                        <div className='ms-3'>
                            <input onChange={userDetails} name='gender' value={'male'} type="radio" id='m' /> <label class="form-label mt-2 ms-2" htmlFor="m">male</label> <br />
                            <input onChange={userDetails} name='gender' value={'female'} type="radio" id='f' /><label class="form-label mt-1 ms-2" htmlFor="f">female</label>

                        </div>
                        <label class="form-label mt-3" htmlFor="">Choose Profile Picture</label> <br />
                        <input onChange={setProfile} required type="file" className='form-control' />

                    </div>
                    <div className="col-6">
                        <label for="exampleInputLname" class="form-label mt-3">Last Name</label>
                        <input onChange={userDetails} name='lname' required type="text" class="form-control" id="exampleInputLname" />

                        <label for="exampleInputMobile" class="form-label mt-3">Mobile Number</label>
                        <input onChange={userDetails} name='mobile' required type="text" class="form-control" id="exampleInputMobile" />

                        {/* dropdown */}
                        <label for="exampleI" class="form-label mt-4">Employee Status</label>

                        <select onChange={userDetails} name='status' class="dropdown w-100 form-control"  id="s1" >
                            <option class="dropdown-item disabled" aria-disabled="true" value="">Select ...</option>

                            <option class="dropdown-item" value={'active'}>Active</option>
                            <option class="dropdown-item" value={'inactive'}>Inactive</option>
                        </select>   <br />

                        <label for="exampleInputLoc" class="form-label mt-3">Location</label>
                        <input onChange={userDetails} name='location' required type="text" class="form-control" id="exampleInputLoc" />



                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button onClick={handleSubmit} style={{ backgroundColor: '#2d0d80', color: 'white' }}
                        type="submit" class="btn btn-primary w-50">Submit</button>

                </div>            </form>
        </div>
    )
}

export default Add
