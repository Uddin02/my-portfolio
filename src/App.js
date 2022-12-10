import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='mx-auto bg-[#D4EEE3]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
