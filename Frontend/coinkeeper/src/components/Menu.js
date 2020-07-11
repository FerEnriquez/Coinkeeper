import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/menu.css'

class GeneralMenu extends React.Component{
		render() {
        return(
            <div>
                <button class="slide">
                    Balance
                </button>
                <button class="slide">
                    Month
                </button>
                <button class="slide">
                    Invesment
                </button>
                <button class="slide">
                    Registry
                </button>
                <button class="slide">
                    Goals
                </button>
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