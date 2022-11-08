import { FlexboardProvider, Flexboard, FlexboardFrame } from '@dorbus/flexboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <FlexboardProvider>
        <Flexboard
          draggable={true}
          width={400}
          minWidth={200}
          maxWidth={600}
          flexboardStyle={{ backgroundColor: '#f2f3f4' }}
          resizerStyle={{ backgroundColor: 'pink' }}>
          <div>Flexboard Content</div>
        </Flexboard>
        <FlexboardFrame>
          <div>Frame Content</div>
        </FlexboardFrame>
      </FlexboardProvider>
      ;
    </div>
  );
}

export default App;
