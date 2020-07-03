import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class GeneralBalance extends React.Component{
    render() {
        return(
            <h1>Hello!</h1>
        );
    }
}

ReactDOM.render(
    <GeneralBalance />,
    document.getElementById('root')
)

export default function Balance(){
    return(
        <div>
            <GeneralBalance />
        </div>
    );
}