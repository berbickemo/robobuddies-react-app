import React from "react";
//imported react
//created card fn
//exported it
const Card = ({name, email, id})/*props*/ => {
    //destructuring
    // const {name, email, id} = props;
    return (
        // <h1>Robobuddies</h1> we can only return one thing
        //added classes to div via tachyons
        //added multiple cards in the index.js
        <div className="bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;