import React from 'react';

class ColorLine extends React.Component {

    render() {
        const style = {
            color: this.props.color,
            backgroundColor: this.props.color,
            height: 5,
        }

        return (
            <hr style={style}></hr>
        )
    }
}

export default ColorLine
