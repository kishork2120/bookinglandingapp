// Submit calback
$.validator.setDefaults({
    submitHandler: function () {
        alert("submitted!");
    }
});

// On document load
$(document).ready(function () {
    // validation for booing form ( Stand alone )
    $("#bookingSubmit").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true,
                minlength: 4,
                maxlength: 12
            },
            passengers: {
                required: true,
                number: true,
                min: 1,
                max: 4
            }
        },
        messages: {
            name: {
                required: "Name required",
                minlength: "Minimum 3 charaters",
                maxlength: "Maximum 30 characters"
            },
            email: {
                required: "Email required",
                email: "Enter a valid email"
            },
            phone: {
                required: "phone required",
                number: "Enter a valid phone number",
                minlength: "Minimum 4 numbers",
                maxlength: "Maximum 12 numbers"
            },
            passengers: {
                required: "number of passengers required",
                number: "Invalid value",
                min: "mimimum 1 passenger",
                max: "maximum 4 passengers allowed"
            }
        }
    });
})