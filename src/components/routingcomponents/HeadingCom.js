import React from 'react';

function HeadingCom({match}){
    console.log('match', match);
    return <h1>welcome user := {match.params.firstname}</h1>
}
 export default HeadingCom;