import React from "react";

class Badgeform extends React.Component{
    
  

//handleChange = e => {
        //this.setState({
           // [e.target.name]: e.target.value
     //   })
  //  };

//handleClick = e => {
       // console.log("boton presionado")
      //  console.log(this.state)
   // }

   // handleSubmit = e => {
        //console.log(this.state)
   //}

    render(){
        return(

            <div>
                
                <form>
                    <div className="form-group">
                        <label> First Name</label>
                        <input value={this.props.formValues.firstName} onChange={this.props.onChange} className="form-control" type="text" name="firstName" ></input>
                    </div>
                    
                    <div className="form-group">
                        <label> Last Name</label>
                        <input value={this.props.formValues.lastName} onChange={this.props.onChange} className="form-control" type="text" name="lastName" ></input>
                    </div>

                    <div className="form-group">
                        <label> Email</label>
                        <input value={this.props.formValues.email} onChange={this.props.onChange} className="form-control" type="email" name="email" ></input>
                    </div>

                    <div className="form-group">
                        <label> job position</label>
                        <input value={this.props.formValues.jobTitle} onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" ></input>
                    </div>

                    <div className="form-group">
                        <label> twitter</label>
                        <input value={this.props.formValues.twitter} onChange={this.props.onChange} className="form-control" type="text" name="twitter" ></input>
                    </div>
                    <button onClick={this.props.onClick} className="btn btn-primary" type="button">Save</button>
                    {this.props.error && (<p className="text-danger">
                        {this.props.error.message}
                    </p>) }
                </form>
            </div>
        )
    }
}

export default Badgeform;