import * as React from 'react';

interface Iprops {
    name : string, 
    job: string,
}

export function Profile(props: Iprops){
    return(
        <div>
            <h2>Profile</h2>
            <div>
                <b>Name : {props.name}</b>
            </div>
            <div>
                <b>Job : {props.job}</b>
            </div>
        </div>
    )
}