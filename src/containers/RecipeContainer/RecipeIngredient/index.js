import React, { Component } from 'react';

export default class RecipeIngredient extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className='list-group-item'>{name}</div>
        );
    }
}