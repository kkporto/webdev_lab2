// import { Link } from "react-router-dom";
import * as client from "./client";
import {FormControl, Button} from 'react-bootstrap';


import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };


  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };


  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <FormControl defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <FormControl defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          
          <Button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </Button>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}
  
//   return (
//     <div id="wd-signup-screen">
//   <h1>Signup</h1>
//       <Form.Control id="wd-username"
//              placeholder="alice"
//              className="mb-2"/>
//       <Form.Control id="wd-password"
//              placeholder="123" type="password"
//              className="mb-2"/>
             
//       <Form.Control id="wd-name"
//              placeholder="Alice" type="name"
//              className="mb-2"/>

//       <Form.Control id="wd-lastname"
//              placeholder="Wonderland" type="lastname"
//              className="mb-2"/>

//       <Form.Control   id="wd-due-date"
//              type="date"
//              className="mb-2"/>

//       <Form.Control id="wd-email"
//              placeholder="alice@wonderland.com" type="email"
//              className="mb-2"/>

//       <Form.Control id="wd-username"
//              placeholder="Username" type="username"
//              className="mb-2"/>


//       <Link id="wd-signin-btn" to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2" 
//       > Sign out</Link>

//     </div>
// );}