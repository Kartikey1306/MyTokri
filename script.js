function continueFunction() {
    alert("It is submitted");
}
// main.js
fetch('package.json')
    .then(response => response.json())
    .then(errorData => {
        // Use the errorData object
        const errorMessage = errorData.MessageToShow;
        alert(errorMessage);

        if (errorData.NextAction.Action === 7) {
            console.log("Performing Close action");
        }

        // Log the error details to the console
        console.log("Error Details:", errorData);
    })
    .catch(error => console.error('Error loading JSON:', error));
    // main.js
fetch('package.json')
.then(response => response.json())
.then(errorData => {
    // Use the errorData object
    const errorMessage = errorData.MessageToShow;
    alert(errorMessage);

    if (errorData.NextAction.Action === 7) {
        console.log("Performing Close action");
    }

    // Log the error details to the console
    console.log("Error Details:", errorData);
})
.catch(error => console.error('Error loading JSON:', error));

