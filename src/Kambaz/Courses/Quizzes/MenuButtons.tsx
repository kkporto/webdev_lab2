
// import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteQuiz } from "./reducer";
import { Link } from "react-router";
import { useParams } from "react-router";
import { ProtectedRouteFaculty } from "../../Account/ProtectedRoute";

import { useSelector } from "react-redux";


type MenuButtonsProps = {
  quizId: string;            // <-- NEW
};




export default function MenuButtons({ quizId }: MenuButtonsProps) {

  const dispatch = useDispatch();
    const handleDelete = (quizId: string) => {
    const confirm = window.confirm("Are you sure you want to delete this quiz?");
    if (confirm) {
      dispatch(deleteQuiz(quizId));
    }
  };

  const { cid, aid } = useParams();
console.log(aid);
const { currentUser } = useSelector((state: any) => state.accountReducer);
console.log(currentUser);


    console.log(quizId)
    return( 
        <div>
  
  <ProtectedRouteFaculty>
              <Link
                to={`/Kambaz/Courses/${cid}/${quizId}/QuizDetails`}>
            <button className="btn btn-primary float-end me-3"
                    id="wd-add-new-course-click"
                    >
                    Edit   
            </button></Link>
            
            <button className="btn btn-danger float-end me-3"
                    id="wd-add-new-course-click"
                    onClick={() => { handleDelete(quizId);}} 
                    > 
                    Delete       
            </button>

            <button className="btn btn-success float-end me-3"
                    id="wd-add-new-course-click"
                    // onClick={() => { addNewCourse();}} 
                    > 
                    Publish     
            </button>

        <h2>&nbsp;</h2>
          </ProtectedRouteFaculty>
          
          </div> 
         
    ); }
