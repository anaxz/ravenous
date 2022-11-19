import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// <Business /> = business componenet
class BusinessList extends React.Component{
    render(){
        // grap each business within the businesses array from prop which is in app
        // return the business object
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map(business => {
                    return <Business business={business} key={business.id} />;
                })
                }
            </div>
        );
    }
}

export default BusinessList;