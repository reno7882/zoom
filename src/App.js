import React, { Component } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import zoom_in from "./images/zoom-in.svg";
import zoom_out from "./images/zoom-out.svg";
import zoom_reset from "./images/zoom-reset.svg";

export default class App extends Component {
  state = {
    type: true,
    limitToBounds: true,
    panningEnabled: true,
    transformEnabled: true,
    pinchEnabled: true,
    limitToWrapper: false,
    disabled: false,
    dbClickEnabled: true,
    lockAxisX: false,
    lockAxisY: false,
    velocityEqualToMove: true,
    enableWheel: true,
    enableTouchPadPinch: true,
    enableVelocity: true,
    limitsOnWheel: false,
  };

  toggleSetting = type => {
    this.setState(p => ({ [type]: !p[type] }));
  };

  render() {
    const {
      type,
      limitToBounds,
      panningEnabled,
      transformEnabled,
      pinchEnabled,
      limitToWrapper,
      disabled,
      dbClickEnabled,
      lockAxisX,
      lockAxisY,
      velocityEqualToMove,
      enableWheel,
      enableTouchPadPinch,
      enableVelocity,
      limitsOnWheel,
    } = this.state;
    return (
      <div className="body">

        <section>
          <br />
          <br />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 order-lg-2 example">
                <TransformWrapper
                  options={{
                    limitToBounds,
                    transformEnabled,
                    disabled,
                    limitToWrapper,
                  }}
                  pan={{
                    disabled: !panningEnabled,
                    lockAxisX,
                    lockAxisY,
                    velocityEqualToMove,
                    velocity: enableVelocity,
                  }}
                  pinch={{ disabled: !pinchEnabled }}
                  doubleClick={{ disabled: !dbClickEnabled }}
                  wheel={{
                    wheelEnabled: enableWheel,
                    touchPadEnabled: enableTouchPadPinch,
                    limitsOnWheel,
                  }}
                >
                  {({
                    zoomIn,
                    zoomOut,
                    resetTransform,
                    setDefaultState,
                    positionX,
                    positionY,
                    scale,
                    previousScale,
                    options: { limitToBounds, transformEnabled, disabled },
                    ...rest
                  }) => (
                    <React.Fragment>
                      <div className="tools">
                        <button
                          className="btn-gradient yellow small btn-type"
                          data-testid="toggle-button"
                          onClick={() => {
                            setDefaultState();
                            this.setState(p => ({ type: !p.type }));
                          }}
                        >
                          {type ? "Div example" : "Image example"}
                        </button>
                        <div className="spacer" />
                        <button
                          className="btn-gradient cyan small"
                          onClick={zoomIn}
                          data-testid="zoom-in-button"
                        >
                          <img src={zoom_in} alt="" />
                        </button>
                        <button
                          className="btn-gradient blue small"
                          onClick={zoomOut}
                          data-testid="zoom-out-button"
                        >
                          <img src={zoom_out} alt="" />
                        </button>
                        <button
                          className="btn-gradient purple small"
                          onClick={resetTransform}
                          data-testid="reset-button"
                        >
                          <img src={zoom_reset} alt="" />
                        </button>
                      </div>
                      <div className="element">
                        {type ? (
                          <TransformComponent>
  <iframe style={{ height: '100vh', border: "none" }} title="iframe"  src="https://graficos.gruporeforma.com/infogram-san-pedro"  
  
  width="100%"   ></iframe>

                          </TransformComponent>
                        ) : (
                          <TransformComponent>
                

  <iframe style={{ height: '100vh', border: "none" }} title="iframe2"  src="https://graficos.gruporeforma.com/gubernatura/?"  
  
  width="100%"   ></iframe>
 



                              
                  

                          </TransformComponent>
                        )}
                      </div>
                      <div style={{ display: 'none' }} className="info">
                        <h3>State</h3>
                        <h5>
                          <span className="badge badge-secondary">
                            Position x : {positionX}px
                          </span>
                          <span className="badge badge-secondary">
                            Position y : {positionY}px
                          </span>
                          <span className="badge badge-secondary">
                            Scale : {scale}
                          </span>
                          <span className="badge badge-secondary">
                            Previous scale : {previousScale}
                          </span>
                        </h5>
                      </div>
                      <div style={{ display: 'none' }}  className="functions">
                        <h3>Functions</h3>
                        <h6>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (disabled ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("disabled")}
                          >
                            <span /> Disable
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (limitToBounds ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("limitToBounds")}
                          >
                            <span /> Limit bounds
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (limitToWrapper ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("limitToWrapper")}
                          >
                            <span /> Limit to wrapper bounds
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (!rest.pan.disabled ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("panningEnabled")}
                          >
                            <span /> Enable panning
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (!rest.pinch.disabled ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("pinchEnabled")}
                          >
                            <span /> Enable pinch
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (transformEnabled ? " active" : "")
                            }
                            onClick={() =>
                              this.toggleSetting("transformEnabled")
                            }
                          >
                            <span /> Enable transform
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (!rest.doubleClick.disabled ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("dbClickEnabled")}
                          >
                            <span /> Double click
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.pan.lockAxisX ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("lockAxisX")}
                          >
                            <span /> Lock X axis
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.pan.lockAxisY ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("lockAxisY")}
                          >
                            <span /> Lock Y axis
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.pan.velocityEqualToMove ? " active" : "")
                            }
                            onClick={() =>
                              this.toggleSetting("velocityEqualToMove")
                            }
                          >
                            <span /> Velocity time based on move
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.pan.velocity ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("enableVelocity")}
                          >
                            <span /> Enable velocity
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.wheel.wheelEnabled ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("enableWheel")}
                          >
                            <span /> Enable wheel
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.wheel.touchPadEnabled ? " active" : "")
                            }
                            onClick={() =>
                              this.toggleSetting("enableTouchPadPinch")
                            }
                          >
                            <span /> Enable touch pad pinch
                          </button>
                          <button
                            className={
                              "btn-gradient grey small" +
                              (rest.wheel.limitsOnWheel ? " active" : "")
                            }
                            onClick={() => this.toggleSetting("limitsOnWheel")}
                          >
                            <span /> Bound limits on wheel
                          </button>
                        </h6>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ display: 'none' }} className="py-5 bg-black">
          <div className="container">
            <p className="m-0 text-center text-white small">
              MIT LICENSE ©{" "}
              <a
                href="https://github.com/prc5"
                target="_blank"
                rel="noopener noreferrer"
              >
                prc5
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
