'use strict';

var e = React.createElement;

var BookingRideForm = function BookingRideForm() {
  return React.createElement(
    "form",
    { action: "", className: "booking-form-two " },
    React.createElement(
      "p",
      null,
      "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even slightly believ- ",
      React.createElement("br", null),
      "able you are going to use a passage."
    ),
    React.createElement(
      "h3",
      { className: "form-block-title" },
      "Select Information"
    ),
    React.createElement("div", { id: "booking_ride_form" }),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Your name" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Email address" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Phone" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Passengers #" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Pick up address" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Drop off address" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement("input", { type: "text", name: "name", placeholder: "Select date" }),
          React.createElement("i", { className: "conexi-icon-small-calendar" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "div",
          { className: "input-holder" },
          React.createElement(
            "select",
            { className: "selectpicker" },
            React.createElement(
              "option",
              null,
              "Select Time"
            ),
            React.createElement(
              "option",
              null,
              "10AM-10.59AM"
            ),
            React.createElement(
              "option",
              null,
              "12PM-12.59PM"
            ),
            React.createElement(
              "option",
              null,
              "1PM-1.59PM"
            ),
            React.createElement(
              "option",
              null,
              "2PM-2.59PM"
            )
          ),
          React.createElement("i", { className: "conexi-icon-clock" })
        )
      )
    ),
    React.createElement(
      "h3",
      { className: "form-block-title" },
      "Select Car Type "
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-lg-6" },
        React.createElement(
          "ul",
          { className: "radio-fields clearfix" },
          React.createElement(
            "li",
            null,
            React.createElement("input", { type: "radio", id: "test1", name: "radio-group", checked: true }),
            React.createElement(
              "label",
              null,
              "Any type"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement("input", { type: "radio", id: "test2", name: "radio-group" }),
            React.createElement(
              "label",
              null,
              "Hybrid"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement("input", { type: "radio", id: "test3", name: "radio-group" }),
            React.createElement(
              "label",
              null,
              "SUV"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement("input", { type: "radio", id: "test4", name: "radio-group" }),
            React.createElement(
              "label",
              null,
              "Luxury"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement("input", { type: "radio", id: "test5", name: "radio-group" }),
            React.createElement(
              "label",
              null,
              "Vans"
            )
          )
        )
      )
    ),
    React.createElement("hr", null),
    React.createElement(
      "ul",
      { className: "special-checkbox" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "span",
          { className: "input-checker" },
          React.createElement("input", { type: "checkbox", name: "apt_vehicle_services_needed", value: "" })
        ),
        "By using this form you agree to our terms & conditions."
      )
    ),
    React.createElement(
      "button",
      { type: "submit", className: "book-btn" },
      "Book Now"
    )
  );
};

var domContainer = document.querySelector('#booking_ride_form');
ReactDOM.render(e(BookingRideForm), domContainer);