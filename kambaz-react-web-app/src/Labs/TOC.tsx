// import { Link } from 'react-router-dom'; // <-- This is the missing import
 
// export default function TOC() {
//   return (
//     <ul>
//       {/* <li><Link to="/Lab 1">Labs</Link></li> */}
//        <li><Link to="/Labs/allLabs">Labs main page</Link></li>
//       <li><Link to="/Labs/Lab1">Assignment 1</Link></li>
//       <li><Link to="/Labs/Lab2">Assignment 2</Link></li>
//       <li><Link to="/Labs/Lab3">Assignment 3</Link></li>
//       <li><Link to="/Kambaz">Kambaz</Link></li>
//     </ul>
//   );
// }

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function TOC() {
 return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link to="/Labs" as={Link}>Home</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab1" as={Link}>Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab2" as={Link} active>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab3" as={Link}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/kkporto">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
);}
