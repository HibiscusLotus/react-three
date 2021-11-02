import React from 'react'
import ReactDom from 'react-dom'

import Routes from './router'
class Router extends React.Component {
    render() {
        return (
            <div>hello word</div>
        )
    }
}

ReactDom.render(<Routes />, document.getElementById('root'))