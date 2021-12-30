import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
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
                    <i class="fas fa-circle dash-icon"></i>
                    <a href="" className='dashboard-nav'>Your service</a>
                    <button className='btn btn-danger'>Make Payment</button>
                </div>
                <div className='row first-row'>
                  <div className='col-md-8'>
                    <div className='card cash-flow-card'>

                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card transaction-card'>
                      <div className='card-body'>
                        <h5 className='card-title'>Transactions</h5>
                        <ul>
                          <li>
                            <div className='card store-card'>
                              <div className='card-body'>
                                <h5 className='card-title store-heading'>Metino Stores</h5>
                                <div className='row'>
                                  <div className='col-md-6 column-store'>
                                    <span className='deposit-text'>Deposit</span>
                                    <span className='deposit-text'>New Balance</span>
                                  </div>
                                  <div className='col-md-6 column-store'>
                                    <span className='balance'>$12435.65</span>
                                    <span className='balance'>$4900</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='card store-card'>
                              <div className='card-body'>
                                <h5 className='card-title store-heading'>Tony T Stores</h5>
                                <div className='row'>
                                  <div className='col-md-6 column-store'>
                                    <span className='deposit-text'>Deposit</span>
                                    <span className='deposit-text'>New Balance</span>
                                  </div>
                                  <div className='col-md-6 column-store'>
                                    <span className='balance'>-$5000.65</span>
                                    <span className='balance'>$900.65</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <a href="#" className='more'>More...</a>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row second-row'>
                  <div className='col-md-4'>
                    <div className='card deposit-card'>
                      <div className='card-body'>
                        <h5 className='card-title'>Deposit</h5>
                          <ul>
                            <li>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className='my-3'>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card withdraw-card'>
                      <div className='card-body'>
                        <h5 className='card-title'>Deposit</h5>
                          <ul>
                            <li>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className='my-3'>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card advance-card'>
                      <div className='card-body'>
                        <h5 className='card-title'>Deposit</h5>
                          <ul>
                            <li>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className='my-3'>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='card user-card'>
                      <div className='card-body'>
                        <h5 className='card-title'>Deposit</h5>
                          <ul>
                            <li>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className='my-3'>
                              <div className='card stores-card'>
                                <div className='card-body'>
                                  <div className='store-info'>
                                    <img className='store-dp' src={Store}/>
                                    <div className='store-infos'>
                                      <span className='store-name'>Tony T store</span>
                                      <span className='store-balance'>$12435.65</span>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className='row' style={{marginTop: "-0.5rem"}}>
                                    <div className='col-md-6 column-store'>
                                      <span className='deposit-text'>Deposit</span>
                                      <span className='deposit-text'>New Balance</span>
                                    </div>
                                    <div className='col-md-6 column-store'>
                                      <span className='balance'>-$5000.65</span>
                                      <span className='balance'>$900.65</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
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

export default function Dashboard(){
    return (
        <ViewportProvider>
          <MyComponent />
        </ViewportProvider>
    );
}