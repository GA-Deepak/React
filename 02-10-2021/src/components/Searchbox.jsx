import React from 'react';

const Searchbox = ({onChange, value}) => {
    return ( 
        <input type="text" placeholder={"Search titles"} id="search" value={value} onChange={e=> onChange(e.currentTarget.value)} />
     );
}
 
export default Searchbox;