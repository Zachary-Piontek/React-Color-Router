import { NavLink, Redirect } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <ul>
          <Redirect to='/rgb/55/55/55' />
          <NavLink to="/rgb/255/0/0" className='link-red'>
            Red
          </NavLink>
          <NavLink to="/rgb/128/128/128" className='link-grey'>
            Grey
          </NavLink>
          <NavLink to="/rgb/0/128/0" className='link-green'>
            Green
          </NavLink>
        </ul>
      </div>
    </> 
  );
}