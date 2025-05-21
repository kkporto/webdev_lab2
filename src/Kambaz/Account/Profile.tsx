import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap';

export default function Profile() {
  return (
    <div id="wd-signup-screen">
  <h1>Signup</h1>
      <Form.Control id="wd-username"
             placeholder="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="123" type="password"
             className="mb-2"/>
             
      <Form.Control id="wd-name"
             placeholder="Alice" type="name"
             className="mb-2"/>

      <Form.Control id="wd-lastname"
             placeholder="Wonderland" type="lastname"
             className="mb-2"/>

      <Form.Control   id="wd-due-date"
             type="date"
             className="mb-2"/>

      <Form.Control id="wd-email"
             placeholder="alice@wonderland.com" type="email"
             className="mb-2"/>

      <Form.Control id="wd-username"
             placeholder="Username" type="username"
             className="mb-2"/>


      <Link id="wd-signin-btn" to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2" 
      > Sign out</Link>

    </div>
);}