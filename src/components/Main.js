import { Route, Switch } from 'react-router-dom';
import RGB from '../hooks/useRGB';
import './main.css';

export default function Main() {
  return (
    <>
      <div className='main'>
        <Switch>
          <Route exact path='/rgb/:r/:g/:b'>
            <RGB />
          </Route>
          <Route path='*'>
            <h1>Route Not Found</h1>
          </Route>
        </Switch>
      </div>
    </> 
  );
}