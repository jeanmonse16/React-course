import React from "react";

import {Link} from "react-router-dom"

import "./styles/BadgeEdit.css";
import logo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import Badgeform from "../components/Badgeform";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeEdit extends React.Component{

    state= { 
        loading: true,
        false:null,
        form:{
               firstName:"",
               lastName:"",
               email:"",
               jobTitle:"",
               twitter:"",
             } 
    };
   

    handleChange = e => {
        this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            },
        })
    }

    //handleDelete is not a keyword :)
    handleDelete = async e => {
        console.log("badge borrado")
        this.setState({
            loading: true, error: null
        })

        try{
            await api.badges.remove(this.props.match.params.badgeId )
            this.setState({loading: false})
            this.props.history.push("/badges")
        }
        catch(error){
            this.setState({
                loading:false, error: error
            })
        }
    }

    handleClick = async e => {
        console.log("boton presionado")
        this.setState({
            loading: true, error: null
        })

        try{
            await api.badges.update(this.props.match.params.badgeId , this.state.form)
            this.setState({loading: false})

            this.props.history.push("/badges")
        }
        catch(error){
            this.setState({
                loading:false, error: error
            })
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async (e) => {  
        this.setState({
            loading: true,
            error: null
        })
     
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({
                loading: false,
                form: data
            })
        }
        catch(error){
            this.setState({
                loading: false, error: error
            })
        }
    }

    render()
    {
       if(this.state.loading){
           return <PageLoading />
       }

       return (
        <React.Fragment>
         
         <div className="BadgeEdit__hero">
             <img className="BadgeEdit__hero-image img-fluid" src={logo} alt="conflogo"></img>
         </div>
         
         <div className="container">
           <div className="row">
               <div className="col-6">
                     <Badge 
                     firstname={this.state.form.firstName || "FirstName"}  
                     lastName={this.state.form.lastName || "LastName"} 
                     hashtag="platziconf" 
                     twitter={this.state.form.twitter ||'twitter' } 
                     jobTitle={this.state.form.jobTitle || "JobPosition"}
                     email={this.state.form.email || 'EMAIL'}
                     />
               </div>
               <div className="col-6">
                    
                      <h1 className="">Edit Attendants</h1>
                      <Badgeform 
                      onChange={this.handleChange} 
                      formValues={this.state.form} 
                      onClick={this.handleClick}
                      error={this.state.error} /> <br/>
                      <Link className="btn btn-primary" onClick={this.handleDelete}> Delete </Link>
               </div>
           </div>
         </div>

        </React.Fragment>
       )
    }
}

export default BadgeEdit;