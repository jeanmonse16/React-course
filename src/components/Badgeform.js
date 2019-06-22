import React from "react";

class Badgeform extends React.Component{

    handleChange = e => {
        console.log(
          {value: e.target.value}
        )
    };

    handleClick = e => {
        console.log("boton presionado")
    }

    render(){
        return(

            <div>
                <h1 className="">New Attendants</h1>
                <form>
                    <div className="form-group">
                        <label> First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" ></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary" type="button">Save</button>
                </form>
            </div>
        )
    }
}

export default Badgeform;