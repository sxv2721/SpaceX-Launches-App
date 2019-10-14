import React from 'react';
import "./styles.scss";

export class Payload extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isShowingPayloads: false
        }
    }
    showPayloads = () =>{
        this.setState({
            isShowingPayloads: !this.state.isShowingPayloads
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
                className="payloadButton">{this.state.isShowingPayloads===false ? 
                <>Show Payloads</>: <>Hide Payloads</>}</button>
                <ol>
                    {this.state.isShowingPayloads===true && payloadMap}
                </ol>
            </div>
        )
    }
}