import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./create.css";
import Store from "../../image/Store.png";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};


const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const MobileComponent = () => {
    return(
        <div>
            in process
        </div>
    )
}

const DesktopComponent = () => {
    return(
        <div>
            <div className='display-page'>
                <div className='dashboard-navbar'>
                    <a style={{marginLeft: "-2.5rem", fontWeight: "700"}} className='dashboard-nav'>Create New Users</a>
                    <button className='btn btn-danger'>Submit</button>
                </div>  
                <div className='card create-user-card'>
                    <ul className='business-detail'>
                        <h3>Business details</h3>
                        <li className='mx-3 business-details'>
                            <span className='business-text'>Business Name</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Phone Number</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Address</span>
                            <span className='colon'>:</span>
                            <input style={{height: "100px"}} type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-5 business-details'>
                            <span className='business-text'>Business Type</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                    </ul>
                    <ul className='bank-detail'>
                        <h3>Bank details</h3>
                        <li className='mx-3 business-details'>
                            <span className='business-text'>Account Holder Name</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Account Number</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Confirm Account Number</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <li className='mx-3 my-3 business-details'>
                            <span className='business-text'>Branch</span>
                            <span className='colon'>:</span>
                            <input type="text" className='mx-3 business-input' />
                        </li>
                        <span className='my-4 verification'>To verify your Account we'll send you two tiny deposit within 1-2 days</span>
                    </ul>
                    <input type="text" className='file-upload' placeholder='Add a Business Logo' />
                </div>
            </div> 
        </div>
    )
}


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Create(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}