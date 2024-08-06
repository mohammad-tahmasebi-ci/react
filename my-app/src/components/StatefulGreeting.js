import React from "react";

class StatefulGreeting  extends React.Component{

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <h1>Hello from StatefulGreeting</h1>
    }
}

export default StatefulGreeting;