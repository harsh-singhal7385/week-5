import React from 'react';

const Signup = (props) => {
    return (
        <>
        <div className='display-4 p-3 text-center bg-danger container mt-5'>
            Sign up Form
        </div>
        <div className='container bg-warning p-3 mb-5'>
            {/* <form className='form-group mt-5 mb-5 ' method='POST'> */}
                {/* <div className='row mt-5 mb-5'>
                    <div className='col'>
                        <input type="text" placeholder="Enter First Name" className="form-control"  required />
                    </div>
                    <div className='col'>
                        <input type="text" placeholder="Enter Last Name" className="form-control"  required />
                    </div>
                </div> */}
                <div className='row mt-5 mb-5'>
                    <div className='col'>
                        <input type="email" placeholder="Enter Email" value={props.email}  onChange={(e)=>{props.setEmail(e.target.value)}} className="form-control"  required />
                    </div>
                    {/* <div className='col'>
                        <input type="number" placeholder="Enter Mobile" pattern='[6-9]{1}[0-9]{9}' className="form-control"  required />
                    </div> */}
                </div>
                <div className='row mt-5 mb-5'>
                    <div className='col'>
                        <input type="password" placeholder="Enter Password" value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}} className="form-control"  required />
                    </div>
                    <div className='col'>
                        {/* <input type="text" placeholder="Confirm Password" className="form-control" /> */}
                    </div>
                </div>
                <div className='col text-center'>
                    <input type="submit" onClick={props.handleSignup} className="btn btn-primary" />
                </div>
            {/* </form> */}
        </div> 
        </>
    );
}

export default Signup;
