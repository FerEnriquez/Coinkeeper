import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/balance.css'

class GeneralBalance extends React.Component{
		render() {
        return(
            <div>
                <div className="total_part">
                    <h1 className="total_title">Total</h1>
                    <h1 className="total_number">345,860.20</h1>
                </div>
                <div className="semi_part">
                    <h1 className="semi_title">Total</h1>
                    <h1 className="semi_number">345,860.20</h1>
                </div>
                
            </div>
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