// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        // Select the HTML element where the API data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            // Convert the response to JSON format
            const users = await response.json();

            // Clear the existing content (the loading message)
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user list
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData once the HTML document has fully loaded
    fetchUserData();
});
