import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlGlass: "./images/g1.jpg",
        };
    }
    handleChangeUrl = (url) => {
        this.setState({ urlGlass: url });
        }
    
  
    render() {
    const { urlGlass } = this.state;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={urlGlass} alt="" />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-dark" onClick={() => this.handleChangeUrl("./images/g2.jpg")}>Glass 1</button>
                    <button className="btn btn-light" onClick={() => this.handleChangeUrl("./images/g3.jpg")}>Glass 2</button>
                    <button className="btn btn-danger" onClick={() => this.handleChangeUrl("./images/g4.jpg")}>Glass 3</button>
                </div>
            </div>
        </div>
    )
  }
}
