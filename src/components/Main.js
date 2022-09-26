import { Route } from 'react-router-dom';
import RGB from '../hooks/useRGB';
import './main.css';

export default function Main() {
  return (
    <>
      <div className='main'>
        <Route exact path='/rgb/:r/:g/:b'>
          <RGB />
        </Route>
      </div>
    </> 
  );
}