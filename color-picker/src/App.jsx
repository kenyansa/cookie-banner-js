import ColorPicker from './ColorPicker';
import './App.css';


function App() {

  return (
    <>
      <h1 className="flex justify-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">React State </span> with a Color Picker.</h1>
      <ColorPicker />
    </>
  )
}

export default App
