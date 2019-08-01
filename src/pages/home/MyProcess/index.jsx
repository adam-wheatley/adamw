import React from "react"
import "./MyProcess.scss"

const MyProcess = () => {
  return (
    <div className="my-process">
      <div className="my-process__content">
        <div className="my-process__heading" height="15">
          <h1 className="my-process__heading-main">My Process</h1>
          <div className="my-process__pill" />
          <div className="my-process__process">
            <div class="card-deck my-process__process-row">
              <div class="card mb-4 my-process__process-tile">
                <div class="card-body">
                  <h5 class="card-title my-process__process-title">Step 1.</h5>
                  <h5 style={{ color: '#3cba54'}} class="card-title my-process__process-title-alt">Estimate</h5>
                  <p class="card-text">
                  First step is to agree upon what the client want and disucss pricing and delivery date.
                  </p>
                </div>
              </div>
              <div class="card mb-4 my-process__process-tile">
                <div class="card-body">
                  <h5 class="card-title my-process__process-title">Step 2.</h5>
                  <h5 style={{ color: '#f4c20d'}} class="card-title my-process__process-title-alt">Design</h5>
                  <p class="card-text">
                  Since every website I create is bespoke I dont use templates. Therefore preparing and designing is essential. I take great care in making sure myself and the client are happy with the design.
                  </p>
                </div>
              </div>
              <div class="w-100 d-none d-md-block d-lg-none"></div>
              <div class="w-100 d-block d-md-none d-lg-none"></div>
              <div class="card mb-4 my-process__process-tile">
                <div class="card-body my-process__process-tile">
                <h5 class="card-title my-process__process-title">Step 3.</h5>
                  <h5 style={{ color: '#db3236'}} class="card-title my-process__process-title-alt">Develop</h5>
                  <p class="card-text">
                  Using modern technologies I will aim to develop the website as fast as possible, but whilst also taking great care and ensuring the end product is perfect.
                  </p>
                </div>
              </div>
              <div class="card mb-4 my-process__process-tile">
                <div class="card-body">
                <h5 class="card-title my-process__process-title">Step 4.</h5>
                  <h5 style={{ color: '#4885ed'}} class="card-title my-process__process-title-alt">Deliver</h5>
                  <p class="card-text">
                  I will deliver your website using scalable techniques to ensure your website is always fast and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default MyProcess
