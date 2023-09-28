import React, {useState} from 'react'
import ReactLesson from './ReactLesson';
import GolangLesson from './GolangLesson';
import TypescriptLesson from './TypescriptLesson';

export default function LessonController(props) {
    console.log('props', props);
    const [course, set_course] = useState(props.selectedCourse)
    console.log(course);
  return (
    <div >
        {course.toLowerCase() === 'nodejs' && <ReactLesson/>}
        {course.toLowerCase() === 'golang' && <GolangLesson/>}
        {course.toLowerCase() === 'typescript' && <TypescriptLesson/>}
        {course.toLowerCase() === 'javascript' && <ReactLesson/>}
        {course.toLowerCase() === 'mongoDb' && <ReactLesson/>}
        {course.toLowerCase() === 'angular' && <ReactLesson/>}
        {course.toLowerCase() === 'react' && <ReactLesson/>}
    </div>
    
  )
}
