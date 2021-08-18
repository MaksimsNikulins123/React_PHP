import React, { Component } from "react";

class Products extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
      }
      toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }
        prodyctType(){
            if(this.props.obj.type == 'DVD'){
                return <div>Size: {this.props.obj.size} MB</div>
            }else if(this.props.obj.type == 'Book'){
                return <div>Weight: {this.props.obj.weight} KG</div>
            }else if(this.props.obj.type == 'Furniture'){
                return <div>Dimension: {this.props.obj.height}x{this.props.obj.width}x{this.props.obj.length}</div>
            }
        }

    render(){
        return(
            <div className="col-md-6 col-lg-4 col-xl-3 text-center">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <div className="form-check">
                            <input type="checkbox" value={this.props.obj.id} name="checkbox" defaultChecked={this.state.isChecked} onChange={this.toggleChange} className="form-check-input delete-checkbox"/>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>{this.props.obj.sku}</div>
                        <div>{this.props.obj.name}</div>
                        <div>{this.props.obj.price} $</div>
                        <div>{this.prodyctType()}</div>
                    </div>
                </div>
            </div>
                
  
            
        );
    }     
}
export default Products