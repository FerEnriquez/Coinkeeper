import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/menu.css'

class GeneralMenu extends React.Component{
		render() {
        return(
            <div className="bar_menu">
                <div className="terms">
                <img className="icon-menu" src={require('../style/icons/open-menu.svg')} alt="Icon"/>
                <h1 className="title">Proyecto Ney</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <GeneralMenu />,
    document.getElementById('root')
)

export default function Menu(){
    return(
        <div>
            <GeneralMenu />
        </div>
    );
}