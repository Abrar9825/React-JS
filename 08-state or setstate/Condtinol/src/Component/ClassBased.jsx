import { Component } from "react";

class ClassBased extends Component {
    state = {
        showText: false,
        changeColor: false
    };

    handleClick = () => {
        console.log("clicked");
        const { showText, changeColor } = this.state

        this.setState({
            showText: !showText,
            changeColor: !changeColor
        });
    };

    render() {
        console.log(this.state);
        const { showText, changeColor } = this.state
        return (
            <div>
                {
                    showText ?
                        <h1 style={{ color: changeColor ? "red" : "black" }}>Hello this is Class Based Component</h1>
                        : null}
                <button onClick={this.handleClick}>Toggle Text</button>
            </div>
        );
    }
}

export default ClassBased;
