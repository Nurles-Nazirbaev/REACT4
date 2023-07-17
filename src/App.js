import { styled } from 'styled-components';
import './App.css';
import Input from './Components/Input';
import Counter from './Components/Counter';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <Input/>
      <Button text={'Cancel'}></Button>
      <Button style={{backgroundColor:'#8CCF8C'}} text={'add'}></Button>
      <Button style={{backgroundColor:'white', border:'1px solid black', color:'black'}} text={'Click'}></Button>
      <Button style={{backgroundColor:'Black'}} text={'delete'}></Button>
      <br/>
      <Counter/>
    </div>
  );
}

export default App;


const Buttons = styled.button`
  padding: 3px 20px;
  background-color: #007AB3;
  color: white;
  border-radius: 10px;
  border: none;
`   