import React, { Component } from 'react'

class Favorites extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    things = () => {
        let result = []
        for (let i = 0; i < 1000; i++) {
            result.push(<p>Helo{i}</p>)
        }
        return result
    }
    render() {
        return (
            <div>
                {this.things()}
            </div>
        )
    }
}

export { Favorites }