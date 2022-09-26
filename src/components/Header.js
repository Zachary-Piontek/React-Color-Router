import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <ul>
          <NavLink to="/rgb/222/222/222" className='red'>
            Red
          </NavLink>
          <NavLink to="/rgb/555/555/555" className='blue'>
            Blue
          </NavLink>
          <NavLink to="/rgb/0/0/0" className='black'>
            Black
          </NavLink>
        </ul>
      </div>
    </> 
  );
}