import React from 'react';
import './Business.css'; // let the business page acess it's css

// create a component class
class Business extends React.Component {
    render(){
        // shortcut to prepend so 'this.props.business.name'
        // need this as it won't recognise otherwise
        const {business} = this.props;
//https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg
        return (
        <div className="Business">
            <div className="image-container">
                <img src={business.imageSrc} alt=''/>
            </div>
            <h2> {business.name} </h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{business.category.toUpperCase()}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
        );
    }
}

// export so avaible to all to access
// also will be rendered by another component instead
export default Business;