import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
// import KambazNavigation from "./Navigation";

import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen">
      {/* <h2>Account</h2> */}
      {/* <Signin />
      <Profile />
      <Signup /> */}
            <table>
        <tr>
          <td valign="top">
            {/* <KambazNavigation/> */}
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);
}
