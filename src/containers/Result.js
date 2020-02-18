import React from 'react';
import { Button } from 'react-bootstrap';
class Result extends React.Component {

    handleClick() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    結果
                </header>
                <body className="App-body">
                    aaa
                    <br />
                    <Button onClick={this.handleClick.bind(this)}>戻る</Button>
                </body>

            </div>
        )
    }
}

export default Result