import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./deposit.css";
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
                    <a style={{marginLeft: "-2.5rem", fontWeight: "700"}} className='dashboard-nav'>Invoices</a>
                </div>  
                <div className='row frst-row'>
                    <h2 className='sub-heading'>Recent</h2>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row scnd-row'>
                    <h2 className='sub-heading'>History</h2>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='col-md-2'>
                    <div className='card recent-card'>
                        <div className='card-body'>
                            <h5 className='card-titless'>Transaction details</h5>
                            <hr style={{marginTop: "-0.5rem"}}/>
                            <div className='store-info' style={{marginLeft:"-1rem", marginTop:"0.6rem"}}>
                                <img className='store-dp' src={Store}/>
                                <div className='store-infos'>
                                    <span className='store-names'>Tony T store</span>
                                    <span className='store-balances'>$12435.65</span>
                                </div>
                            </div>
                            <hr style={{marginTop: "0.5rem"}}/>
                            <div className='deposit-info' style={{marginTop: "-0.5rem"}}>
                                <span className='deposit-heading'>Deposit</span>
                                <span className='deposit-balance'>$12432.65</span>
                                <span className='cash-transaction'>Cash Transaction</span>
                            </div>
                            <hr style={{marginTop: "-0.2rem"}}/>
                            <div className='desc-box'>
                                <span className='deposit-heading'>Description</span>
                            </div>
                            <hr style={{marginTop: "1.5rem"}}/>
                            <div className='share-btn'>
                                <button className='btn btn-share'>
                                    <span className='share'>Share</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    </div>
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

export default function Deposit(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}