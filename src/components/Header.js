import React,{Component} from 'react';
export default class Header extends Component{
    render() {
        return(
          <div>
          <nav className="h-14 navb shadow-2xl border-t-2 hidden lg:block">
              <ul className="flex flex-auto max-w-full mr-6">
                  <li className=" py-2 max-w-xs flex-auto   hoverable hover:text-white">
                      <span className="flex justify-center flex-row mx-3 hover:text-white hover:border-gray-100">                                            
                        <a href="#" className=" font-bold font-sans"> 
                            <span>Departments</span>
                            <span className="fa fa-bars mt-1 mx-3"></span>
                        </a>                                                                                                      
                      </span>
                      {/* departments menu start */}
                      <div className=" mega-menu border border-gray-400 shadow-xl bg-white font-semibold text-gray-900">
                            <div className="container mx-auto w-full flex flex-wrap justify-between">
                
                                <ul className="w-full">
                                    <li className="p-2 hover:bg-yellow-500 ">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Deals of the Day</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500 ">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Clearance Sale</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Antiques, Art and Collectables</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Women</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Men</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Baby and Mother</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Jewellery and Watches</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Phones and Accessories</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Kitchen</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Health and Beauty</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Consumer Electronics</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Computers and Laptops</span>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-yellow-500">
                                        <a href="#" className="text-sm px-4">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="ml-4">Other Categories</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*dep END  */}
                    
                  </li>                  

                  <li className="py-2 hoverable hover:text-white    max-w-xs px-10 flex-auto">
                    <span className="flex justify-center flex-row mx-3 hover:text-white hover:border-gray-100">                        
                        
                        <a href="#" className=" hover:text-white  font-semibold font-sans flex-shrink-0">
                            <span>Your Recently Viewed</span>  
                            <span className="fa fa-caret-down mt-1 mx-3"></span>
                        </a>                         
                    </span>
                     {/* Recently viewed START */}
                    <div className=" rv-menu border border-gray-400 shadow-xl bg-white text-gray-900">
                        <div className="container mx-auto w-full ">
                            <div className="pt-6 content-center flex justify-center">
                                <p className="text-gray-700 text-sm">Recently Viewed Products is a function which helps you keep track of your recent viewing history.</p>
                            </div>
                            <div className="py-6 flex justify-center">
                                <button className="bg-yellow-500  py-2 px-6 text-gray-900 font-semibold hover:bg-yellow-700 hover:text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                        {/* Recently viewed END */}

                  </li>
                  
                  <li className="w-1/12 flex-auto">
                                        
                  </li>

                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans pl-10 "> Vendor's Guide </a>
                  
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2 text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> Sell On FlexiAfrica </a>
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2 text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> Track Your Order </a>
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2  text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> FAQ </a>
                  </li>

              </ul>
          </nav>



          {/* for md screens */}
          <nav className="h-14 navb shadow-2xl border-t-2 hidden md:block lg:hidden">
              <div className="flex flex-auto max-w-full mr-6 ml-6 ">
              <ul className="flex flex-auto max-w-full  justify-center">
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans pl-10 "> Vendor's Guide </a>
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2 text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> Sell On FlexiAfrica </a>
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2 text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> Track Your Order </a>
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <span className="flex justify-center py-2  text-medium font-black font-sans px-4">| </span>                  
                  </li>
                  <li className="max-w-xs flex-auto flex-shrink-0">
                      <a href="#" className="flex justify-center py-2 hover:text-white text-medium font-semibold font-sans"> FAQ </a>
                  </li>

              </ul>
              </div>
          </nav>


          {/* for sm screens */}
          <nav className="h-14 navb shadow-2xl border-t-2  md:hidden lg:hidden">
              <div className="mr-6 ml-6">
                <ul className="flex justify-center text-sm">
                    <li className=" flex-auto ">
                      <a href="#" className="flex justify-center py-2 hover:text-white font-semibold font-sans "> Vendor's Guide </a>
                  </li>
                  <li className=" flex-auto ">
                      <span className="flex justify-center py-2  font-black font-sans px-2">| </span>                  
                  </li>
                  <li className=" flex-auto ">
                      <a href="#" className="flex justify-center py-2 hover:text-white  font-semibold font-sans"> Sell On FlexiAfrica </a>
                  </li>
                  <li className=" flex-auto ">
                      <span className="flex justify-center py-2  font-black font-sans px-2">| </span>                  
                  </li>
                  <li className=" flex-auto ">
                      <a href="#" className="flex justify-center py-2 hover:text-white  font-semibold font-sans"> Track Your Order </a>
                  </li>
                  <li className="max-w-xs flex-auto ">
                      <span className="flex justify-center py-2   font-black font-sans px-2">| </span>                  
                  </li>
                  <li className="max-w-xs flex-auto ">
                      <a href="#" className="flex justify-center py-2 hover:text-white font-semibold font-sans"> FAQ </a>
                  </li>
                </ul>              
              </div>
          </nav>


          </div>  
        );
    }
}