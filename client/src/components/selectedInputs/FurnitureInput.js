import React, { Component } from "react";
export default class FurnitureInput extends Component
{
    constructor(props){
        super(props);    
        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeWidth = this.onChangeWidth.bind(this);
        this.onChangeLength = this.onChangeLength.bind(this);    
        this.state = {
            height: '',
            width: '',
            length: ''
        }
    }  
    onChangeHeight(e){
        this.state.height = e.target.value   
        this.props.callbackFunctionHeight(this.state.height);
    };
    onChangeWidth(e){
        this.state.width = e.target.value   
        this.props.callbackFunctionWidth(this.state.width);
    };
    onChangeLength(e){
        this.state.length = e.target.value   
        this.props.callbackFunctionLength(this.state.length);
    };
    render(){
        return (
            <div>
                <div className="row mb-3">
                    <label htmlFor="inputHeight" className="col-sm-2 col-form-label">Height (CM)</label>
                    <div className="col-sm-4">
                        <input 
                        onChange={this.onChangeHeight} 
                         type="text" name="height" className="form-control" id="height" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputWidth" className="col-sm-2 col-form-label">Width (CM)</label>
                    <div className="col-sm-4">
                        <input 
                        onChange={this.onChangeWidth} 
                        type="text" name="width" className="form-control" id="width" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputLength" className="col-sm-2 col-form-label">Length (CM)</label>
                    <div className="col-sm-4">
                        <input 
                        onChange={this.onChangeLength} 
                        type="text" name="length" className="form-control" id="length" required/>
                    </div>
                </div>
            </div>         
        );
    }
    
}