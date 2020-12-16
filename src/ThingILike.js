import React from 'react';

const ThingILike = () => {
    const thingsILike =['gaming','reading manga','sleeping','riding horses'];
    const listItems = thingsILike.map(thing =>
    <li>{thing}</li>
    );
    return (
        <ol>
            {listItems}
        </ol>
    )
}
export default ThingILike;