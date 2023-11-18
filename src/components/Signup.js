import React, {useState} from 'react';
import signpic from "../images/signup.svg";
import '../App.css';
import {NavLink, useNavigate} from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // setting initial state
  const [user, setUser] = useState({
    name: "", email:"", phone:"", facebook:"", instagram:"", twitter:"", linkedin:"", password:"", cpassword:""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user, [name]: value});
  };

  const PostData = async(e) => {
    e.preventDefault();
    const {name, email, phone, facebook, instagram, twitter, linkedin, password, cpassword} = user;

    const res = await fetch('https://sentimentsync.onrender.com/register', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, facebook, instagram, twitter, linkedin, password, cpassword
      })
    });

    // const data = await res.json();
    // if(data.status === 422 || !data){
    //   window.alert("Invalid Registeration");
    //   console.log("Invalid regisertaion");
    // }
    // else{
    //   window.alert("Registration Successful");
    //   console.log("Registration Successful");

    //   navigate('/login');
    // }

    const data = await res.json();
    if(res.status === 422 || !data) {
      window.alert(data.error);
    } else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
    }

  }

  return (
    <>
      <section className="signup">
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign Up</h2>
              <form method='POST' className='register-form' id='register-form'>

                <div className='form-group'>
                  <label htmlFor='name'>
                    <i className='zmdi zmdi-account material-icons-name'></i>
                  </label>
                  <input type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Company Name'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i className='zmdi zmdi-email material-icons-name'></i>
                  </label>
                  <input type='email' name='email' id='email' autoComplete='off'  value={user.email} onChange={handleInputs}  placeholder='Company Email'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='phone'>
                    <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                  </label>
                  <input type='number' name='phone' id='phone' autoComplete='off'  value={user.phone} onChange={handleInputs}  placeholder='Your Phone Number'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='facebook'>
                    <i className='zmdi zmdi-facebook material-icons-name'></i>
                  </label>
                  <input type='text' name='facebook' id='facebook' autoComplete='off'  value={user.facebook} onChange={handleInputs}  placeholder='Facebook'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='instagram'>
                    <i className='zmdi zmdi-instagram material-icons-name'></i>
                  </label>
                  <input type='text' name='instagram' id='instagram' autoComplete='off'  value={user.instagram} onChange={handleInputs}  placeholder='Instagram'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='twitter'>
                    <i className='zmdi zmdi-twitter'></i>
                  </label>
                  <input type='text' name='twitter' id='twitter' autoComplete='off'  value={user.twitter} onChange={handleInputs}  placeholder='Twitter'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='linkedin'>
                    <i className='zmdi zmdi-linkedin'></i>
                  </label>
                  <input type='text' name='linkedin' id='linkedin' autoComplete='off'  value={user.linkedin} onChange={handleInputs}  placeholder='Linkedln'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>
                  <input type='password' name='password' id='password' autoComplete='off'  value={user.password} onChange={handleInputs}  placeholder='Your Password'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='cpassword'>
                    <i className='zmdi zmdi-lock material-icons-name'></i>
                  </label>
                  <input type='password' name='cpassword' id='cpassword' autoComplete='off'  value={user.cpassword} onChange={handleInputs}  placeholder='Confirm your Password'/>
                </div>

                <div className='form-group form-button'>
                  <input type='submit' name='signup' id='signup' className='form-submit' value='Register' onClick={PostData}/>
                </div>

              </form>
            </div>

            <div className='signup-image'>
              <figure>
                <img src={signpic} alt='signup image'/>
              </figure>
              <NavLink to='/login' className='signup-image-link'>
                I am Already Registered
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;