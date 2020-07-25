import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/balance.css'

class GeneralBalance extends React.Component{
		render() {
        return(
            <div>

                <div className="total_part">
                    <h1 className="total_number">$ 345,860.20</h1>
                </div>
                <div className="semi_part">
                    <h1 className="semi_number">$ 345,860.20</h1>
                </div>
                <div className="accounts">
                    <h1 className="title_accounts">Cuentas</h1>
                    <table>
                    <tr>
                        <td>HSBC</td>
                        <td>$ 15,000</td>
                    </tr>
                    <tr>
                        <td>Santander</td>
                        <td>$ 500,000</td>
                    </tr>
                    <tr>
                        <td>N26</td>
                        <td>$ 245.48</td>
                    </tr>
                    <tr>
                        <td>Doláres</td>
                        <td>$ 85</td>
                    </tr>
                    </table>
                </div>
                <div className="invesment">
                    <h1 className="title_accounts">Inversiones</h1>
                    <table>
                    <tr>
                        <td>HSBC</td>
                        <td>$ 15,000</td>
                    </tr>
                    <tr>
                        <td>Santander</td>
                        <td>$ 500,000</td>
                    </tr>
                    <tr>
                        <td>N26</td>
                        <td>$ 245.48</td>
                    </tr>
                    <tr>
                        <td>Doláres</td>
                        <td>$ 85</td>
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