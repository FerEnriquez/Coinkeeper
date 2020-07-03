import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/balance.css'

class GeneralBalance extends React.Component{
		render() {
        return(
            <div>
                <div className="total_div">
                    <h1 className="total_title">Total</h1>
                    <h1 className="total_number">345,860.20</h1>
                </div>
                <div className="chart_div">
                    <PieChart
                        data={[
                            {title: 'One', value: 10, color: '#ff4d4d'},
                            {title: 'Two', value: 15, color: '#c94479'},
                            {title: 'Three', value: 20, color: '#c3f241'},
                            {title: 'Two', value: 15, color: '#0cfc40'},
                            {title: 'Three', value: 20, color: '#b6cef9'}
                        ]}
                    />
                </div>
                <div className="table_div">
                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                    </table>
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