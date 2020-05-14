import React from 'react';
import First from './First';
import Graph1 from './Graph1';
import DragAndDrop from './DragAndDrop';
class App extends React.Component {
    render() {
        return (
            <div>
                <First button='MyButton' />
                <Graph1 />
                <DragAndDrop/>
            </div>
        );
    }
}

export default App;