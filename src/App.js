import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import CategoryDetail from './pages/CategoryDetail';
import Todo from './pages/Todo';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/:category" element={<CategoryDetail />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
