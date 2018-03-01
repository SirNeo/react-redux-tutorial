import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ExampleComponent extends Component {
    constructor() {
        super();
        console.log('Constructing the example component');
        this.state = {
            articles: [
                {title: 'React Redux Tutorial for Beginners', id: 1},
                {title: 'Redux & React: How use Redux with React', id: 2}
            ]
        };
    }

    render() {
        console.log('Rendering the example component');
        const { articles } = this.state;
        return (
            <ul>{articles.map(el => <li key = {el.id}> {el.title}</li>)}</ul>
        )
    }
}

export default ExampleComponent;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<ExampleComponent />, wrapper) : false;