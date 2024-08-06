import React from "react";

class StatefulGreetingWithProps extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
                // the below commands execute after the setState is executed
                // resulting in new values of the properties
                console.log('new state', this.state.introduction);
                console.log('new state', this.state.buttonText);
            return {
            introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
            buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    incrementCount() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementCount()}>{this.state.count}Increment</button>
            </div>
        )
    }
}

export default StatefulGreetingWithProps;