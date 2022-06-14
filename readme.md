### Book Festival App

This is an app created to manage events and bookings for a book festival.

### MVP

Ability to create & update events.
Ability to manage bookings for events.
Browse and select events by date, author, book, genre, price.
Record users.
Produce calendar of events for a user.
Seed database from Edinburgh Festivals API.

### Extensions implemented

Send email automatically on booking.
Produce management information.

### Other potential extensions

Record & request passwords for users.
Take payments.

### Technologies Used

The Book Festival app was built with a Javascript / React frontend and a Java / Spring backend, using an H2 database.

[Screenshot](./Screenshot.png)

### Running the Application

Request an API key from Edinburgh Festivals Listings website and from Google Maps. Create a service id and a template id on emailjs.

Clone the code from the repo. 
Open folder bookfestival in IntelliJ (or similar IDE) and run Bookfestival Application - this starts the backend.

In the terminal, navigate to bookfestival-frontend. Install the following packages:
axios `npm install axios`
bootstrap `npm install bootstrap`
react-bootstrap `npm install react-bootstrap`
react-router-dom `npm install react-router-dom`
reactstrap `npm install reactstrap`
@emailjs `npm install @emailjs/browser` `npm install emailjs-com`
@fullcalendar `npm install @fullcalendar/react @fullcalendar/daygrid`
@googlemaps/js-api-loader `npm install @googlemaps/js-api-loader`


Create a .env file under bookfestival-frontend. Copy the following code:
```REACT_APP_POSTING_A_BOOKING=http://localhost:8080/bookings```
```REACT_APP_POSTING_A_NEW_CUSTOMER=http://localhost:8080/customers```
```REACT_APP_GETTING_EXISTING_CUSTOMER=http://localhost:8080/customer```
```REACT_APP_MAP_KEY=your Google Maps API key```
```REACT_APP_LINK_TO_DELETE_BOOKING=http://localhost:8080/bookings/```
```REACT_APP_PUBLIC_KEY=your Edinburgh Festivals API key```
```REACT_APP_TEMPLATE_ID=your emailjs template id```
```REACT_APP_SERVICE_ID=your emailjs service id```

cd to bookfestival-frontend and `npm start`

