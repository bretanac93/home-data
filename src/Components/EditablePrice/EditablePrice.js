import React, { Component } from 'react';
import './EditablePrice.css'

class EditablePrice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            value: this.props.price,
            house_id: this.props.house_id
        };
        this.handleClick = this.handleClick.bind(this);
        this.changePrice = this.changePrice.bind(this);
    }
    handleClick(evt) {
        this.setState({
            editing: !this.state.editing,
        });
        if (evt.target.name === 'save') {
            console.log(this.state.value, this.state.house_id);
        }
    }
    changePrice(evt) {
        this.setState({
           value: evt.target.value
        });
    }
    render() {
        return (
            <div className="EditablePrice">
                <a name="edit" hidden={this.state.editing} onClick={this.handleClick}>{parseInt(this.state.value, 10).toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</a>

                <div className="input-group mb-3" hidden={!this.state.editing}>
                    <input className='form-control'  style={{width: '30px'}} type="text" name={'newPrice-' + this.props.house_id} value={this.state.value} onChange={this.changePrice} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" name='save' onClick={this.handleClick}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditablePrice;
