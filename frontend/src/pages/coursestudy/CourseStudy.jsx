/*import React, { useEffect } from 'react';
import "./coursestudy.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import {CourseData} from "../../context/CourseContext";
import { server } from '../../main';

const CourseStudy = ({user}) => {
    const params = useParams();

    const { fetchCourse, course } = CourseData();
    const navigate = useNavigate();

    if(user && user.role !== "admin" && !user.subscription.includes(params.id))
        return navigate("/");

    useEffect(()=>{
        fetchCourse(params.id)
    }, []);
  return (
    <>
    {course && (
        <div className="course-study-page">
            <img src={`${server}/${course.image}`} alt="" width={350} />
            <h2>{course.title}</h2>
            <h4>{course.description}</h4>
            <h5>by - {course.createdBy}</h5>
            <h5>Duration - {course.duration} weeks</h5>
            <Link to={`/lectures/${course._id}`}>
                 <h2>
                    Lectures
                </h2>
            </Link>
        </div>
    )}
    </>
  )
}

export default CourseStudy;
*/
import React, { useEffect } from 'react';
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from '../../main';
import { UserData } from '../../context/UserContext';

const CourseStudy = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { fetchCourse, course } = CourseData();
  const { isAuth } = UserData();

  // Redirect unauthenticated users
  if (!isAuth) {
    navigate("/login");
    return null;
  }

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt={course.title} width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>by - {course.createdBy}</h5>
          <h5>Duration - {course.duration} weeks</h5>

          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
