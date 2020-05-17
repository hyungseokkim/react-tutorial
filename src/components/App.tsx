import React from 'react';
import Reactflowchart from './Reactflowchart';


class App extends React.Component {
    render() {
        return (
            <div>
                <React.StrictMode>
                <Reactflowchart/>
                </React.StrictMode>
            </div>
        );
    }
}

export default App;