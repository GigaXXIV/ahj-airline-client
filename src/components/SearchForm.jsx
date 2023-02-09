import React, { useState } from "react";

const SearchForm = (props) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const _handleInput = (e) => {
        if (e.target.name === 'origin') {
            // console.log('origin', e.target.value);
            setOrigin(e.target.value.toUpperCase());
        } else if (e.target.name === 'destination') {
            // console.log('destination', e.target.value);
            setDestination(e.target.value.toUpperCase());
        }
        
        // if i use the following line, i get the live input data saved to the parent state :( 
        // props.onSubmit({ origin, destination });
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ origin, destination });
        // empty the input fields 
        setDestination('');
        setOrigin('');
    }

    return (
        <form onSubmit={ _handleSubmit } className="formtag">

            <h3 className="bottompadding">Search your flight</h3>
            <div className="centertag bottompadding">
            Origin:
            <input type="text" placeholder="Origin" name="origin" value={origin} onInput={_handleInput} />
            Destination:
            <input type="text" placeholder="Destination" name="destination" value={destination} onInput={_handleInput} />
            </div>
            <div className="centerbutton">
            <input type="submit" value='Search' className="Button" />
            </div>
        </form>

    );
};

export default SearchForm;
