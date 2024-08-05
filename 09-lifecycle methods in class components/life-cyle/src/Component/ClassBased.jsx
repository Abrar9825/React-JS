import { Component } from "react";

class ClassBased extends Component {
    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountstyle: false,
    };

    handleClick = () => {
        console.log("clicked");
        const { showText, changeColor } = this.state

        this.setState({
            showText: !showText,
            changeColor: !changeColor
        });

    };

    // every time called when page is load 
    componentDidMount() {
        console.log("This is called first time on page load");
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        });
        
        handleCount = () => {
            this.setState({
                ...this.state,
                count: this.state.count + 1
            })
        }
    }

    componentDidUpdate(prevprops, prevstate) {
        console.log(prevstate, this.state);
        if (prevstate && prevstate.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state,
                changeCountstyle: true,
            });
        }

    }

    componentWillUnmount() {
        console.log("comonent is getting destroy or unmonunt");
        
    }
    render() {
        // console.log(this.state);
        const { showText, changeColor, count, changeCountstyle } = this.state
        return (
            <div>
                {
                    showText ?
                        <h1 style={{ color: changeColor ? "red" : "black" }}>Hello this is Class Based Component</h1>
                        : null}
                <button onClick={this.handleClick}>Toggle Text</button>
                <button onClick={this.handleCount}>Incress Count Value </button>
                <h3 style={{ color: changeCountstyle ? "blue" : "black" }}>Count is {count}</h3>
            </div>
        );
    }
}

export default ClassBased;
