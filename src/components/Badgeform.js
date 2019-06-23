import React from "react";

class Badgeform extends React.Component{
    
    state = {
        firstName: "",
        LastName: "",
        email: "",
        jobPosition: "",
        twitter: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = e => {
        console.log("boton presionado")
        console.log(this.state)
    }

    handleSubmit = e => {
        console.log(this.state)
    }

    render(){
        return(

            <div>
                <h1 className="">New Attendants</h1>
                <form>
                    <div className="form-group">
                        <label> First Name</label>
                        <input value={this.state.firstName} onChange={this.handleChange} className="form-control" type="text" name="firstName" ></input>
                    </div>
                    
                    <div className="form-group">
                        <label> Last Name</label>
                        <input value={this.state.LastName} onChange={this.handleChange} className="form-control" type="text" name="LastName" ></input>
                    </div>

                    <div className="form-group">
                        <label> Email</label>
                        <input value={this.state.email} onChange={this.handleChange} className="form-control" type="email" name="email" ></input>
                    </div>

                    <div className="form-group">
                        <label> job position</label>
                        <input value={this.state.jobPosition} onChange={this.handleChange} className="form-control" type="text" name="jobPosition" ></input>
                    </div>

                    <div className="form-group">
                        <label> twitter</label>
                        <input value={this.state.twitter} onChange={this.handleChange} className="form-control" type="text" name="twitter" ></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary" type="button">Save</button>
                </form>
            </div>
        )
    }
}

export default Badgeform;