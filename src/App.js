import { Canvas } from '@react-three/fiber';
import './App.css'
import { Model } from './Shoe';
import { OrbitControls, Stage } from '@react-three/drei';
import { Model1 } from './Scene';
function App() {
  return (
    <div className="App">
      <div className='shoe'>
      <Canvas  camera={{ position: [0, 0, 150] }}>
      <Stage>
        <Model color="orange" position={[0, 1, -1]} />
        {/* <Model1></Model1> */}
        <Model color="orange" scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0.6, -2]} />
      </Stage>
      <OrbitControls   autoRotate/>
    </Canvas>
    </div>
    {/* <div class='modelo-wrapper' style={{height:'100vh'}}> <div style={{height:'100vh'}}> <div style={{height:'100vh'}}> <iframe src="
    https://app.modelo.io/embedded/1776971344431734784?viewport=false&autoplay=false&autorotate=false&hideTools=false&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false" style={{width:'100%',height:'100%'}} frameborder="0" mozallowfullscreen webkitallowfullscreen
    allowfullscreen ></iframe> </div> </div> </div> */}
    <div className='shoe'>
      <Canvas  camera={{ position: [0, 0, 150] }}>
      <Stage>
        <Model1 scale={-1} rotation={[0, 0.5, Math.PI]} position={[1, 0.2, -1]}/>
        <Model1 scale={1}  position={[0.3, 1, -0.2]}/>
      </Stage>
      <OrbitControls   autoRotate/>
    </Canvas>
    </div>
    </div>
  );
}

export default App;
