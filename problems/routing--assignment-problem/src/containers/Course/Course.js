import React, { Component } from 'react';

class Course extends Component {
    
    state = {
        courseTitle : ''
    }

    componentDidUpdate(prevS) {
        this.parseQueryParams();
    }

    componentDidMount() {
        this.parseQueryParams();
    }

    parseQueryParams = () => {
         // parsing query parameter
         const query = new URLSearchParams(this.props.location.search);
         for(let q of query.entries()) {
            if(this.state.courseTitle !== q[1]) {
                this.setState({courseTitle : q[1]})
            }
         }
    };

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;