import './App.css';
import Sample1 from './samples/sample1';
import Sample2 from './samples/sample2';
import Sample3 from './samples/sample3';
import {Fragment} from 'react';

function App() {
  return (
    <Fragment>
      <Sample1 />
      <Sample2 />
      <Sample3 />
    </Fragment>
  );
}

export default App;
