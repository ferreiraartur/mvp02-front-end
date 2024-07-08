import { useState, createContext, useContext } from 'react';
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar'
//import Courses from '../pages/Courses'
//import axios from 'axios';
import dados from '../dados.json'
// 3 - Consumir o contexto
//import { Contexto } from '../pages/Courses'

function NoPage(){
    // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);

  const [courses, setCourse] = useState(dados.courses);

  //const [carrinho] = useContext(Contexto);


 
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
            
              
             {/* {console.log(courses)}
              {courses.map((course) => (
                <li key={course.id}>
                  <strong>{course.title}</strong> - R$ {course.price}
                </li>
              ))} */}
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