import { createContext, useEffect, useState } from "react"
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Grid from '@mui/material/Grid';
import CountContext from '../components/CartItem'
import NavBar from '../components/NavBar'
//import Courses from '../pages/Courses'
//import axios from 'axios';
import dados from '../dados.json'

function NoPage(){
    // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);

  const [courses, setCourse] = useState(dados.courses);


 
  //useEffect(() => {
  //  setCourses(dados)
  //}, []);

 

  const handleClick = () => {
    console.log('Botão clicado!');
  };

  


    return (
        <div>

          <h2>Lista de Cursos</h2>
            <ul>
              {console.log(courses)}
              {courses.map((course) => (
                <li key={course.id}>
                  <strong>{course.title}</strong> - R$ {course.price}
                </li>
              ))}
            </ul>
            
      <p>Você clicou {count} vezes</p>
      <NavBar count={count}> </NavBar>
     

      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
    )
}

export default NoPage;