import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <ul>
          <NavLink to="/rgb/222/222/222">
            Red
          </NavLink>
          <NavLink to="/rgb/555/555/555">
            Blue
          </NavLink>
          <NavLink to="/rgb/0/0/0">
            Black
          </NavLink>
        </ul>
      </div>
    </> 
  );
}