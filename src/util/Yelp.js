/*Throughout the rest of this project, we will use the fetch() browser API to make our requests.
Since fetch() is a browser API, older browsers may not support it.
To increase the accessibilty of Ravenous to a wider audience of users,
we’ll need to add a fetch() polyfill to support older browsers.
Within the Ravenous directory in your terminal, run npm install whatwg-fetch --save
to install the whatwg-fetch polyfill and add it to your package.json file.*/

/*Note: Yelp+Cors no access issue. No idea how to fix currently :/ */
const key = require('.env');
const apiKey = key;
// This object will store the functionality needed to interact with the Yelp API.
const Yelp = {
  // to retrieve search results from the Yelp API
  search(term, location, sortBy){
    //const corsAPI = 'https://cors-anywhere.herokuapp.com/'; <- yelp don't support?
    //will return a promise that will ultimately resolve to our list of businesses
    /*fetch() will currently not function correctly due to CORS restrictions but we 
    bypass using an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint,
    make them for the requesting app with the proper CORS permissions, 
    and then return the response back to the requesting app.*/
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      //headers: This identification is presented using our API key as a browser header.
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      // retrieve businesses & convert it into json
      return response.json();
    }).then(jsonResponse => {
      // retrieve list of businesses from json
      if(jsonResponse.businesses){
        // use map to iterate through the lists
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.imageSrc,
          name: business.name,
          address: business.location.address,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zipCode,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.reviewCount
        }));
      }
    });
  }
};

export default Yelp;