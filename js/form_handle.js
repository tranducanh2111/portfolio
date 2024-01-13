function submitForm() {
    // Collect form data
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    // Send form data to Formspree using Axios
    axios.post("https://formspree.io/f/meqyogzw", { name, address, message })
        .then(function(response) {
            // Successful form submission
            document.getElementById("form").reset();
            alert("Thank you! Your message has been sent.");
        })
        .catch(function(error) {
            // Error in form submission
            alert("Oops! Something went wrong. Please try again later.");
        });
}