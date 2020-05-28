'use strict';

const e = React.createElement;

const BookingRideForm = () => {
  return (
    <form action="" className="booking-form-two ">
      <p>There are many variations of passages of lorem ipsum available but the majority have
      suffered alteration in some form by injected humor or random word which don't look even
    slightly believ- <br />able you are going to use a passage.</p>
      <h3 className="form-block-title">Select Information</h3>
      <div id="booking_ride_form"></div>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Your name" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Email address" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Phone" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Passengers #" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Pick up address" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Drop off address" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <input type="text" name="name" placeholder="Select date" />
            <i className="conexi-icon-small-calendar"></i>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-holder">
            <select className="selectpicker">
              <option>Select Time</option>
              <option>10AM-10.59AM</option>
              <option>12PM-12.59PM</option>
              <option>1PM-1.59PM</option>
              <option>2PM-2.59PM</option>
            </select>
            <i className="conexi-icon-clock"></i>
          </div>
        </div>
      </div>
      <h3 className="form-block-title">Select Car Type </h3>
      <div className="row">
        <div className="col-lg-6">
          <ul className="radio-fields clearfix">
            <li>
              <input type="radio" id="test1" name="radio-group" checked />
              <label>Any type</label>
            </li>
            <li>
              <input type="radio" id="test2" name="radio-group" />
              <label>Hybrid</label>
            </li>
            <li>
              <input type="radio" id="test3" name="radio-group" />
              <label>SUV</label>
            </li>
            <li>
              <input type="radio" id="test4" name="radio-group" />
              <label>Luxury</label>
            </li>
            <li>
              <input type="radio" id="test5" name="radio-group" />
              <label>Vans</label>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <ul className="special-checkbox">
        <li>
          <span className="input-checker">
            <input type="checkbox" name="apt_vehicle_services_needed" value="" />
          </span>By using this form you agree to our terms & conditions.
    </li>
      </ul>
      <button type="submit" className="book-btn">Book Now</button>
    </form>
  )
}

const domContainer = document.querySelector('#booking_ride_form');
ReactDOM.render(e(BookingRideForm), domContainer);