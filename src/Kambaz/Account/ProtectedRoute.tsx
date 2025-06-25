import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Account/Signin" />;
}}



export function ProtectedRouteFaculty({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser?.role === "FACULTY" ) {
    return children;
  } else {
    return;
}}

export function ProtectedRouteStudent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser?.role === "STUDENT" ) {
    return children;
  } else {
    return;
}}

