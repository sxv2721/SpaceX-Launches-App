import React from 'react';
import "./styles.scss";

export class Payload extends React.Component {
    constructor(props){
        super(props);
        this.state={
            clickBool: this.props.payloadBool || false
        }
    }
    showPayloads = () =>{
        this.setState({
            clickBool: !this.state.clickBool
        })
    }
    render() {
        //console.log(this.state.payloads);
        const payloadMap = this.props.payloads.map((payload, index) => {
            return (<li key={"payload " + index}>
                <dl className="payloadItem">
                    <dt className="payloadTitle">ID:</dt>
                     <dd className="payloadDesc">{payload.payload_id}</dd>
                    <dt className="payloadTitle">Type:</dt> 
                    <dd className="payloadDesc">{payload.payload_type}</dd>
                    {payload.nationality !== undefined && 
                    <> <dt className="payloadTitle">Nationality:</dt> 
                    <dd className="payloadDesc">{payload.nationality}</dd></>}
                </dl>
            </li>
            );
        })
        return (
            <div className="payloadList">
                <h4 className="payloadHeader">Payloads:</h4>
                <button onClick={this.showPayloads} 
                className="payloadButton">{this.state.clickBool===false ? 
                <>Show Payloads</>: <>Hide Payloads</>}</button>
                <ol>
                    {this.state.clickBool===true && payloadMap}
                </ol>
            </div>
        )
    }
}