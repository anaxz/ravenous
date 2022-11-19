import React from 'react';
import './SearchBar.css';

/*const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};*/

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        // set intial state of search bar
        this.state = {
            term: '', //search input/businesses
            location: '', //location to search near from the location input
            sortBy:'best_match' //selected search option
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    // returns the current CSS class for a sorting option.
    getSortByClass(sortByOption){
        // check if sortBy matches with parameter
        if(this.state.sortBy === sortByOption){
            return 'active';
        }
        return '';
    }

    //-----------sets the state of a sorting option etc.-------------
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({location: event.target.value});
    }//--------------------

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
// to prevent the default action of clicking a link from triggering at the end of the method.
        event.preventDefault();
    }

    // Remember functions in here don't need to declare explicitly!
    renderSortByOptions(){
        // access it's keys and iterate through them with map
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
        /*className: This will conditionally style each sort by option,
        displaying to the user which sorting option is currently selected. */
        /*onClick: This will allow us to both bind to the current value of this
        but also bind the current sortByOptionValue as the first argument to the method call,
        ensuring the method is called with the appropriate value when clicked.*/
            return (
            <li className={this.getSortByClass(sortByOptionValue)}
            key={sortByOptionValue} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
            </li>
            );
        });
    }
    render(){
        return(
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;