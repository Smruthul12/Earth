import { Suspense} from 'react';
import 'Earth_react-three-fiber/App.css';
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { Earth } from "Earth_react-three-fiber/components/earth";
const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <>
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />  
        </Suspense>
      </Canvas>     
    </CanvasContainer>     
    </>
  )
}

export default App
