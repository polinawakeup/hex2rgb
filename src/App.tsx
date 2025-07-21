import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState<string>('#ffffff');
  const [color, setColor] = useState<string>('#ffffff');
  const [info, setInfo] = useState<string>('');

  function hexToRgb (value: string): string {
    const hex = value.slice(1);
    const r = parseInt(hex.slice(0, 2), 16).toString();
    const g = parseInt(hex.slice(2, 4), 16).toString();
    const b = parseInt(hex.slice(4, 6), 16).toString();
    return `rgb(${r}, ${g}, ${b})`;
  }

  const onInputHandle = function (e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(newValue)) {
      setColor(newValue);
      setInfo(hexToRgb(newValue));
    } else if (newValue.length === 7) {
      setInfo('Ошибка!');
      setColor("#BB4242");
    }
  }
  
  return (
    <div style={ {backgroundColor: color} } className='container'>
      <input type="text" value={inputValue} onChange={onInputHandle}/>
      <div className='info'>{info}</div>
    </div>
  )
}

export default App
