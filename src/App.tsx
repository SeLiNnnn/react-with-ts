import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './components/Hooks/UseState/UseState';
import UseEffect from './components/Hooks/UseEffect/UseEffect';
import {ClassUseState} from './components/Class/ClassUseState/ClassUseState';
import {ClassUseEffect} from './components/Class/ClassUseState/ClassUseEffect';
import UseContext from './components/Hooks/UseContext/UseContext';
import UseRef from './components/Hooks/UseRef/UseRef';
import useLoading from './components/Hooks/UseLoading/useLoading';

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
};

interface IShowResult {
  message: string,
  status: string
}


export const ThemeContext = React.createContext(themes.light);

const App: React.FC = () => {

  const [style, setStyle] = useState(themes.light);

  const [refresh, setRefresh] = useState(true);
  const [data, loading] = useLoading('https://dog.ceo/api/breeds/image/random', [refresh]);
  const dogData = data as IShowResult;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/* use State*/}
        <UseState/>
        <ClassUseState/>
        {/*  use Effect*/}
        <UseEffect/>
        <ClassUseEffect/>
        {/*  use Context*/}
        <ThemeContext.Provider value={style}>
          <button onClick={() => {
            setStyle(style === themes.light ? themes.dark : themes.light);
          }}>点击变色
          </button>
          <UseContext/>
        </ThemeContext.Provider>
        {/*  use Ref*/}
        <UseRef/>
        {/*  custom hook*/}
        <section>
          <div>
            <button onClick={() => {
              setRefresh(!refresh);
            }}>刷新图片
            </button>
          </div>
          {loading ?
            <p>🐶读取中</p>
            :
            <img src={dogData && dogData.message} alt="dog"/>
          }
        </section>
      </header>
    </div>
  );
};

export default App;
