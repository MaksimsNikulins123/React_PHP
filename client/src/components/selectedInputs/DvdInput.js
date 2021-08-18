import React, { Component } from "react";

class DvdInput extends Component
{
    constructor(props){
        super(props);      
        this.onChangeSize = this.onChangeSize.bind(this);
    }
    onChangeSize(e) {
        let data = e.target.value;
        this.props.callbackFunctionSize(data);  
    }
    render(){
        return (
            <div className="row mb-3">
                <label htmlFor="inputSize" className="col-sm-2 col-form-label">Size (MB)</label>
                <div className="col-sm-4">
                    <input 
                    onChange={this.onChangeSize} 
                    type="text" name="size" className="form-control" id="size" required/>
                </div>
            </div>
        );
    }
}  
export default DvdInput
