import React, { Component } from "react";

class BookInput extends Component
{
    constructor(props){
        super(props);     
        this.onChangeWeight = this.onChangeWeight.bind(this);
    }
    onChangeWeight(e){
        let data = e.target.value;
        this.props.callbackFunctionWeight(data); 
    };
    render(){
        return (
            <div className="row mb-3">
                <label htmlFor="inputWeight" className="col-sm-2 col-form-label">Weight (KG)</label>
                <div className="col-sm-4">
                    <input  
                    onChange={this.onChangeWeight} 
                    type="text" name="weight" className="form-control" id="weight" required/>
                </div>
            </div>
        );
    }  
}
export default BookInput