import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const callAboutPage = async() => {
    try {
      const res = await fetch('http://localhost:5000/analysis', {
        method : 'GET',
        headers : {
          Accept : 'application/json',
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        credentials : 'include'
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(res.status !== 200){
        const error = new Error(res.error);
        throw error;
      };
    } catch (error) {
      console.log(`${error}`);
      navigate('/login')
    };
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <Wrapper>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='box'>
                <h2>Base Score</h2>
                <h3>{userData.baseScore}</h3>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='profile-head'>
                <p>Hello {userData.name} Team</p>
                 <p> Let's Analyse your Social Profile </p>
                 <p> Here's the Result </p>
                  <p>Base Score: Represents the analysis based on All time Customer Reactions.</p>
                  <p>Current Score: Represents the recent analysis of past one month Customer Reactions.</p>

                {/* tabs */}
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>
                      About 
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='box1'>
                <h2>Current Score</h2>
                <h3>{userData.currentScore}</h3>
              </div>
            </div>
          </div>

          <div className='row'>
            {/* left side */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>YOUR SOCIALS</p>
                <a href={userData.linkedin} target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-linkedin material-icons-name"></i></a> <br/>
                <a href={userData.twitter} target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-twitter material-icons-name"></i></a> <br/>
                <a href={userData.instagram} target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-instagram material-icons-name"></i></a> <br/>
                <a href={userData.facebook} target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-facebook material-icons-name"></i></a> <br/>
              </div>
            </div>

            {/* right side */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-context profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>USER ID</p>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData._id}</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>COMPANY NAME</p>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>EMAIL</p>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>CONTACT</p>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.box {
  width: 200px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
}

h2, h3 {
  margin: 0;
}

.box1 {
  width: 200px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-right: -28px; /* Adjust the value as needed */
}

h2{
  font-size: 20px
}

h2, h3 {
  margin: 0;
}
`;

export default About;

