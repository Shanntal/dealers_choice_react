import React from 'react';
import { render } from 'react-dom';

//App is a stateless component (function component, can pass in props)
const App = () => {
    return (
        <div>Shanntal</div>
    )
}

/*
class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        //returning JSX (not html) differece: can use {} to evaluate javascript
        //what is actually being mounted in the div id="app"
        //where creating structure of whole page
    }
}
*/

const app = document.querySelector('#app');


//mounting the App component onto the #app
render(<App />, app);