import React, {Component} from 'react';
import Background from './background_image.jpg';
import BackgroundTwo from './dedicated-development-team.jpg';

var sectionStyle = {
    width: "100%",
    height: "550px",
    backgroundImage: "url(" + Background + ")"
  };

var sectionTwo={
    width: "100%",
    height: "200px",
    backgroundImage: "url(" + BackgroundTwo + ")"
}




export default class Home extends Component{

    render(){
        return(
            <div>
                <section style={ sectionStyle }>
                    <div className="pt-32 mx-20">
                       <h1 className="text-5xl text-gray-200 font-semibold">Trusted Software Development </h1>
                       <h1 className="text-5xl text-gray-200 font-semibold">Partner Since 2014</h1>
                       <p className="w-2/3 text-gray-100 text-xl pt-10">N-X digital solutions is an International provider of software development outsourcing services with delivery
                         centres in Zimbabwe, Botswana, Zambia, and Australia and over 1000 expert software developers. We partner with technology businesses globally helping them to build successful engineering teams and create innovative software products.</p>
                    </div>
                </section>
                {/* our clients START */}
                <div className="pt-16 bg-gray-200">
                    <h1 className="text-center font-bold text-2xl uppercase text-gray-800">Our Clients</h1>
                    <p className="text-gray-800 text-center text-xl">From Tech leaders to telecom giants, see our clients</p>
                    <div className="flex flex-wrap justify-between mx-20">
                        <img className="h-32" src="images/4dc8342a-903c-4592-a26c-2b2c2410ab28.png"/>
                        <img className="h-32" src="images/d2ac9bc8-bd36-4feb-8853-0887e908c114.png"/>
                        <img className="h-32" src="images/c054ae24-2160-4c6c-b453-a5f04326e6e7.png"/>
                        <img className="h-32" src="images/f89ac858-96fa-46f9-ade6-7d7a178dd4f5.png"/>
                        <img className="h-32" src="images/780c54cb-b850-45bd-8f0b-bdb49971cbeb.png"/>
                    </div> 
                    <hr className="mx-20"/>                   
                         {/* 2nd row */}
                    <div className="flex flex-wrap justify-between mx-20">
                         <img className="h-32" src="images/15d77bc8-7620-4a4b-a877-97bfef559f64.png"/>
                        <img className="h-32" src="images/opentext.png"/>
                        <img className="h-32" src="images/c323f87b-316a-4091-8e7a-a890e123db31.png"/>
                        <img className="h-32" src="images/80617be9-624c-4045-94eb-f679e2d8bf1d.png"/>
                        <img className="h-32" src="images/780c54cb-b850-45bd-8f0b-bdb49971cbeb.png"/>
                    </div>
                    <div className="h-56">
                        
                    </div>
                </div>
                {/* our clients END */}


                {/* SERVICES PROVIDED INDUSTRIES WE SERVE */}
                <div className="pt-16">
                    <h1 className="text-center font-semibold text-2xl uppercase text-gray-800 nxText">SERVICES PROVIDED/ INDUSTRIES WE SERVE</h1>
                    <div className="flex flex-wrap justify-between mx-20">
                        <div className="w-1/4 px-2">
                            <img src='/images/dedicated-development-team.jpg'/>
                        </div>
                        <div className="w-1/4 px-2">
                            <img src='/images/dedicated-development-team.jpg'/>
                        </div>
                        <div className="w-1/4 px-2">
                            <img src='/images/dedicated-development-team.jpg'/>
                        </div>
                        <div className="w-1/4 px-2">
                            <img src='/images/dedicated-development-team.jpg'/>
                        </div>
                    </div>
                </div>    


                <div className="h-56">
                </div>          
                    
                

                
            </div>
        );
    }
} 