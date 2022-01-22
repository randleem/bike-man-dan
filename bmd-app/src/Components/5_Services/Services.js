import React, { useState } from "react";
import "./Services.css";
import ServicesCard from "../ServicesCard/ServicesCard";
import pic1 from "./service1.jpg";
import pic2 from "./service2.jpg";
import pic3 from "./service3.jpg";

function Services() {
  const [otherServices, setOtherServices] = useState(false);

  function handleOther() {
    setOtherServices(!otherServices);
  }
  return (
    <div id="services" className="services-container">
      <div className="services-introduction">
        <div className="services-introduction-title">
          <h1>Bike Servicing</h1>
        </div>
        <h3>
          To keep your bike safe and running smoothly its ideal to have it
          professionally serviced regularly - as often as every 3-6 months
          depending on how much you use, and where you store it. If you’ve
          ridden many miles between servicing then some key parts may need
          replacing. If you’re unsure which service you’l need just give us a
          call.
        </h3>
      </div>
      <div className="services-cards">
        <ServicesCard
          title="On Site Repair"
          imageURL={pic2}
          imageAlt="ladies bike with basket"
          // backgroundColor='#514663'
          // fontColor='#FFFFFF'
          price="£35"
          // summary="I will take off your wheel and fit you a brand new innertube or index your gears on site be that at home, work or on the roadside"
          summary="We can perform some small repairs at your house or work"
          detail={[
            <h3>Jobs available on site:</h3>,
            <ul>
              <li>Puncture repair (innertube replacement)</li>
              <li>Gear indexing</li>
              <li>Gear cable fitting</li>
            </ul>,
            <h4>
              For more options and best results we recommend booking a
              collection for individual jobs
              <br />
              <br />
              Minimum spend £35 + parts
            </h4>,
          ]}
        />
        <ServicesCard
          title="Standard Service"
          imageURL={pic3}
          imageAlt="ladies bike with basket"
          // backgroundColor='#514663'
          // fontColor='#FFFFFF'
          price="£50"
          //summary="Our standard service will get your bike running as safely and smoothly as is possible without “major surgery”. It includes a safety check and triage report on the condition of the whole bike and all it’s components, which you will approve before we carry out the work. Click to see more info"
          summary="Get your bike running as safely and smoothly as is possible without “major surgery”"
          detail={[
            <h4>Includes:</h4>,
            <ul>
              <li>
                Initial inspection and report of entire bike and all components
                - NB some issues (eg internal condition of bearings) may not be
                identified if they require work that is not included below
              </li>
              <li>
                Checking for wear and fitting of a new chain if necessary
                (Important: please see our chain wear article!!!)
              </li>
              <li>Indexing of front and rear gears</li>
              <li>Tightening all components to the correct torque</li>
              <li>
                Inflating tyres to correct pressure (where condition permits)
              </li>
              <li>Truing of wheels (spoke tension only - no damaged rims)</li>
              <li>Adjustment of brake system for performance and safety</li>
              <li>Fitting of brake pads and cables (where necessary)</li>
              <li>Adjustment of wheel, bottom bracket and headset bearings</li>
              <li>
                Quick clean of frame, forks and drivetrain to inspect parts for
                damage (removal of excessive dirt for this purpose may incur a
                cleaning charge)
              </li>
              <li>
                Adjustment of the saddle, handlebars and other accessories where
                required.
              </li>
            </ul>,
            <h3>Not included in the standard service</h3>,
            <ul>
              <li>Replacement of tyres/tubes</li>
              <li>Fitting of cassette/crankset</li>
              <li>Fitting of new wheels</li>
              <li>Fitting of accessories</li>
              <li>
                Fitting or servicing of headset, bottom bracket or wheel
                bearings.
              </li>
            </ul>,
            <p>
              The standard service is not suitable for damaged bikes, or bikes
              that have been ridden for longer than 6 months since their last
              service. Please see our Advanced and Full services.
            </p>,
          ]}
        />
        <ServicesCard
          title="Full Service"
          imageURL={pic1}
          imageAlt="ladies bike with basket"
          // backgroundColor='#CF5C36'
          price="£130"
          summary="A complete strip-down and rebuild of your bike"
          detail={[
            <h4>Includes:</h4>,

            <p>
              A full strip down, service, clean, rebuild and set up of your
              bike. We remove every component down to the frame and forks, clean
              everything meticulously including the drivetrain, service all
              headset, bottom bracket and wheel bearings, bleed hydraulic brakes
              and re-fit every part with the correct lubricants/grease etc. The
              bike is then setup and test ridden for perfection.
            </p>,
            <p>
              All fitting / upgrading of existing parts is included in the
              price. The cost of the parts is not included.
            </p>,
            <p>
              Mountain bike servicing may be considerably more expensive if
              including fork / shock / frame bearing servicing - please get in
              touch if you need this service.
            </p>,
          ]}
        />
      </div>
      <button className="services-button-other" onClick={handleOther}>
        {!otherServices ? "Other Services" : "Hide Other Services"}
      </button>
      {otherServices && (
        <div>
          <div className="services-cards-other services-cards">
            <ServicesCard
              title="Brake Blead"
              imageURL="https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721"
              imageAlt="ladies bike with basket"
              // backgroundColor='#CF5C36'
              price="£30"
              summary="Blead brakes and refill brake fluid"
              detail={["fix one", "fix two", "fix 3", "fix 4"]}
            />
            <ServicesCard
              title="New Bike Build"
              imageURL="https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721"
              imageAlt="ladies bike with basket"
              // backgroundColor='#CF5C36'
              price="£50"
              summary="I will assemble your new bike straight from the box"
              detail={["fix one", "fix two", "fix 3", "fix 4"]}
            />
            <ServicesCard
              title="Suspension"
              imageURL="https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721"
              imageAlt="ladies bike with basket"
              // backgroundColor='#CF5C36'
              price="£ variable"
              summary="I will send off your bike to specialist suspension fixers whilst i continue to work on your bike"
              detail={["fix one", "fix two", "fix 3", "fix 4"]}
            />
          </div>
          <div className="services-cards-other services-cards">
            <ServicesCard
              title="Advice & Tuition"
              imageURL="https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721"
              imageAlt="ladies bike with basket"
              // backgroundColor='#CF5C36'
              price="£ call me to find out"
              summary="Give me a call and we can discuss your specific requirements"
              detail={["fix one", "fix two", "fix 3", "fix 4"]}
            />
          </div>
        </div>
      )}
      <div className="services-grid-container">
        <div className="services-grid-type">
          <div className="services-grid-content">
            <h1>Standard</h1>
          </div>
          <div className="services-grid-content">
            <h1>Advanced</h1>
          </div>
          <div className="services-grid-content">
            <h1>full</h1>
          </div>
        </div>
        <div className="services-grid-price">
          <div className="services-grid-content">
            <h2>£65</h2>
          </div>
          <div className="services-grid-content">
            <h2>£85</h2>
          </div>
          <div className="services-grid-content">
            <h2>£120</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
