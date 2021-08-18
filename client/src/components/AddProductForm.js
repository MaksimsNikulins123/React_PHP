import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from  'react-router-dom';
import DvdInput from "./selectedInputs/DvdInput";
import BookInput from "./selectedInputs/BookInput";
import FurnitureInput from "./selectedInputs/FurnitureInput";
import axios from "axios";

class AddProductForm extends Component
{
    constructor(props){
        super(props);
        this.onChangeSku = this.onChangeSku.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTypeSwitcher = this.onChangeTypeSwitcher.bind(this);
        this.validation = this.validation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            sku: '',
            name: '',
            price: '',
            typeSwitcher: '',
            size: '',
            weight: '',
            height: '',
            width: '',
            length: ''
        }  
      
    }
    onChangeSku(e){
        this.setState({sku: e.target.value})
        const sku = {sku: e.target.value}
        this.validation(sku)
    };
    onChangeName(e){
        this.setState({name: e.target.value})
        const name = {name: e.target.value}
        this.validation(name)
    };
    onChangePrice(e){
        this.setState({price: e.target.value})
        const price = {price: e.target.value}
        this.validation(price)
    };
    onChangeTypeSwitcher(e){
        this.setState({typeSwitcher: e.target.value})
        const typeSwitcher = {typeSwitcher: e.target.value}
        this.validation(typeSwitcher)
    };
    callbackFunctionSize = (childDataSize) => {
        this.setState({size: childDataSize})
        const size = {size: childDataSize}
        this.validation(size)
    }
    callbackFunctionWeight = (childDataWeight) => {
        this.setState({weight: childDataWeight})
        const weight = {weight: childDataWeight}
        this.validation(weight)
    }
    callbackFunctionHeight = (childDataHeight) =>{
        this.setState({height: childDataHeight})
        const height = {height: childDataHeight}
        this.validation(height)
    }
    callbackFunctionWidth = (childDataWidth) =>{
        this.setState({width: childDataWidth})
        const width = {width: childDataWidth}
        this.validation(width)
    }
    callbackFunctionLength = (childDataLength) =>{
        this.setState({length: childDataLength})
        const length = {length: childDataLength}
        this.validation(length)
    }
    validation(inputValue)
    {  
        if(Object.keys(inputValue) == "sku"){
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(Object.values(inputValue) != ""){
                if(this.state.name == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide Name";
                }else if(this.state.price == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide Price";
                }else if(this.state.typeSwitcher == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, select Data type";
                }else if(this.state.typeSwitcher == "DVD"){
                    if(this.state.size == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Size";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }    
                }else if(this.state.typeSwitcher == "Book"){
                    if(this.state.weight == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Weight";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }  
                }else if(this.state.typeSwitcher == "Furniture"){
                    if(this.state.height == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Height";
                    }else if(this.state.width == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Width";
                    }else if(this.state.length == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Length";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }
                }
            }
        }
        if(Object.keys(inputValue) == "name"){
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(Object.values(inputValue) != ""){
                if(this.state.sku == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide SKU";
                }else if(this.state.price == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide Price";
                }else if(this.state.typeSwitcher == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, select Data type";
                }else if(this.state.typeSwitcher == "DVD"){
                    if(this.state.size == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Size";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }    
                }else if(this.state.typeSwitcher == "Book"){
                    if(this.state.weight == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Weight";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }  
                }else if(this.state.typeSwitcher == "Furniture"){
                    if(this.state.height == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Height";
                    }else if(this.state.width == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Width";
                    }else if(this.state.length == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Length";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }
                }
            }
           
        } 
        if(Object.keys(inputValue) == "price"){  
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else if(Object.values(inputValue) != ""){
                if(this.state.sku == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide SKU";
                }else if(this.state.name == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, provide Name";
                }else if(this.state.typeSwitcher == ""){
                    const error = document.getElementById('error');
                    error.innerHTML = "Please, select Data type";
                }else if(this.state.typeSwitcher == "DVD"){
                    if(this.state.size == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Size";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }    
                }else if(this.state.typeSwitcher == "Book"){
                    if(this.state.weight == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Weight";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }  
                }else if(this.state.typeSwitcher == "Furniture"){
                    if(this.state.height == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Height";
                    }else if(this.state.width == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Width";
                    }else if(this.state.length == ""){
                        const error = document.getElementById('error');
                        error.innerHTML = "Please, provide Length";
                    }else{
                        const error = document.getElementById('error');
                        error.innerHTML = "";
                    }
                }
            }
        } 
        if(Object.keys(inputValue) == "typeSwitcher"){           
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, select Data type";
            }else if(Object.values(inputValue) == "DVD"){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Size";
            }else if(Object.values(inputValue) == "Book"){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Weight";
            }else if(Object.values(inputValue) == "Furniture"){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide dimensions in HxWxL format";
            }
           
        }
        if(Object.keys(inputValue) == "size"){ 
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Size";
            }else if(this.state.sku == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(this.state.name == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(this.state.price == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else{
                const error = document.getElementById('error');
                error.innerHTML = "";
            }  
        } 
        if(Object.keys(inputValue) == "weight"){ 
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Weight";
            }else if(this.state.sku == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(this.state.name == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(this.state.price == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else{
                const error = document.getElementById('error');
                error.innerHTML = "";
            }  
        }
        if(Object.keys(inputValue) == "height"){   
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Height";
            }else if(this.state.sku == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(this.state.name == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(this.state.price == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else if(this.state.width == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Width";
            }else if(this.state.length == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Length";
            }else{
                const error = document.getElementById('error');
                error.innerHTML = "";
            }  
        }
        if(Object.keys(inputValue) == "width"){   
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Width";
            }else if(this.state.sku == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(this.state.name == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(this.state.price == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else if(this.state.height == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Height";
            }else if(this.state.length == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Length";
            }else{
                const error = document.getElementById('error');
                error.innerHTML = "";
            }  
        }
        if(Object.keys(inputValue) == "length"){   
            if(Object.values(inputValue) == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Length";
            }else if(this.state.sku == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide SKU";
            }else if(this.state.name == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Name";
            }else if(this.state.price == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Price";
            }else if(this.state.height == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Height";
            }else if(this.state.width == ""){
                const error = document.getElementById('error');
                error.innerHTML = "Please, provide Width";
            }else{
                const error = document.getElementById('error');
                error.innerHTML = "";
            }  
        }
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
            sku: this.state.sku,
            name: this.state.name,
            price: this.state.price,
            typeSwitcher: this.state.typeSwitcher,
            size: this.state.size,
            weight: this.state.weight,
            height: this.state.height,
            width: this.state.width,
            length: this.state.length
        }; 
     
        axios.post('http://localhost/React_PHP/server/addProduct.php', obj)
        .then(function (){
            window.location.href = '/'
        }
            
        )
        .catch(function (error) {
        console.log(error);
        });
       
    }
    renderInputOfSelectedType(selectedTypeSwitcher)
    {
        if(selectedTypeSwitcher == 'DVD'){
            return <DvdInput callbackFunctionSize = {this.callbackFunctionSize}  />
        }else if(selectedTypeSwitcher == 'Book'){
            return <BookInput callbackFunctionWeight = {this.callbackFunctionWeight} />
        }else if(selectedTypeSwitcher == 'Furniture'){
            return <FurnitureInput callbackFunctionHeight = {this.callbackFunctionHeight} callbackFunctionWidth = {this.callbackFunctionWidth} callbackFunctionLength = {this.callbackFunctionLength}/>
        }      
    }
    
    render() {  
         return (
            <div>
                <div className="container">
                    <header>
                        <div className="header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                            <div className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Product Add</div>
                                <div className="nav nav-pills">
                                    <div className="me-2">
                                        <input type="submit" form="product_form" value="SAVE" className="btn btn-success" id="submit"/>
                                    </div>
                                    <div className="me-2">
                                        <Link to={'/'} className="btn btn-success">CANCEL</Link>
                                    </div>
                                </div>
                        </div>
                    </header>  
                    <section>
                        <div className="container">
                            <div className="bd-example">
                                <form onSubmit={this.onSubmit} id="product_form">
                                    <div className="row mb-3">
                                        <label htmlFor="sku" className="col-sm-2 col-form-label">SKU</label>
                                        <div className="col-sm-4">
                                            <input onChange={this.onChangeSku} type="text" name="sku" className="form-control" id="sku" required/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-4">
                                            <input onChange={this.onChangeName} type="text" name="name" className="form-control" id="name" required/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="price" className="col-sm-2 col-form-label">Price ($)</label>
                                        <div className="col-sm-4">
                                            <input onChange={this.onChangePrice} type="text" className="form-control" id="price" required/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="TypeSwitcher" className="col-sm-2 col-form-label">Type Switcher</label>
                                        <div className="col-sm-4">
                                            <select defaultValue={'DEFAULT'} onChange={this.onChangeTypeSwitcher} className="form-select col-sm-4" name="productType" id="productType" required>
                                                <option value="DEFAULT" disabled >Type Switcher</option>
                                                <option value="DVD">DVD</option>
                                                <option value="Book">Book</option>
                                                <option value="Furniture">Furniture</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div id="selectTable">{ this.renderInputOfSelectedType(this.state.typeSwitcher) }</div>
                                    <div className="alert-danger">
                                        <div id="error">Fill empty filds</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>  
                    <footer>
                        <div className="footer d-flex flex-wrap justify-content-center py-3 mb-4 border-top">
                            <div>
                                <p>Scandiweb Test assigment</p>
                            </div>
                        </div>
                    </footer>
                </div>   
            </div>
        );
    }
}
export default AddProductForm