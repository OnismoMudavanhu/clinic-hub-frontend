import React,{Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import axios from 'axios';

export default class LoginRegister extends  Component{

    constructor(props){
        super(props);
        this.state = {
            user_name:"",
            password:""
        };
    }

    submitLogin(e){
        // var baseUrl = "http://localhost:8081/login";
        // console.log("values",this.state.user_name,this.state.password);
        //To be done:check for empty values before hitting submit
        // axios.post('')
        // e.preventDefault();
        console.log(this.state)
        
    }

    onUserNameChange(e){
        this.setState({user_name:e.target.value})
    }

    onPasswordChange(e){
        this.setState({password:e.target.value})
    }

    render() {
        return(
            <div className="">             

            <div className="pt-20  md:mx-8 rounded ">
                <div className="block lg:flex  justify-center ">
                    <div className="w-full lg:w-1/2 flex px-10 ">                        
                        <div className=" flex-auto ">                                                            

                                <form className="bg-gray-200 shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                                    <div className="mt-8 text-center">
                                        <h3 className="text-2xl  font-semibold ">Login</h3>
                                                                               
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" HtmlFor="user_name">
                                            User Name:
                                        </label>
                                        <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 " name="user_name" type="text" placeholder="User Name" onChange={this.onUserNameChange.bind(this)}/>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-grey-darker text-sm font-bold mb-2" HtmlFor="password">
                                            Password:
                                        </label>
                                        <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3  mb-3" name="password" type="password" placeholder="******************"
                                        onChange={this.onPasswordChange.bind(this)}/>
                                        <p className="text-red text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                   
                                    <div className="flex md:justify-between flex-wrap ">
                                        <div className="">
                                            <button className="bg-gray-900 text-white  px-16 py-2  rounded-full " type="button" onClick={this.submitLogin.bind(this)}>Login</button>

                                            {/* <Link to="/dashboard"><input type="button" className="bg-gray-900 text-white  px-16 py-2  rounded-full " value="Login"/>
                                            </Link> */}
                                            
                                        </div>

                                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-orange-700" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>                               
                                

                            
                        </div>
                       
                     </div>
                </div>
            </div>
            </div>
        );
    }
}