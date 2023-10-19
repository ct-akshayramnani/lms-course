import './App.css';
import CourseDetail from './Pages/CourseDetail';
import CoursePage from './Pages/CoursePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' Component={CoursePage} />
      <Route exact path='/CourseDetail' Component={CourseDetail} />
      </Routes>
    </Router>
  );
}

export default App;
