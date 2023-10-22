import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33BFFF', '#ff3465', '#123456', '#000', '#f09756'];
  return (
    <>
      <div className="container">
        <ColorPicker colors={colors} />
      </div>






    </>
  );
}

export default App;