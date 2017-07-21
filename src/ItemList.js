import React, {Component} from 'react';

export class ItemList extends Component {
    render() {
        let items = this.props.items;
        if (items && items.length) {
            console.log(items);
            return <div className="App-intro">
                <ul>
                    {items.map(item => <li key={item.Id}>{this.props.format(item)}</li>)}
                </ul>
            </div>
        } else {
            return <div>no items</div>
        }
    }
}