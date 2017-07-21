import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ApiClient} from './ApiClient.js';
import {SearchForm} from './SearchForm.js'
import {ItemList} from './ItemList.js'

class App extends Component {
    _client = new ApiClient()
    constructor() {
        super();
        this.state = {
            organizations: [],
            corpUsers: []
        };
    }
    
    onSearch(criteria) {
        if (criteria) {
            this
                ._client
                .getOrganizationsList(criteria)
                .then(searchResult => {
                    this.setState({organizations: searchResult.organizations, users: searchResult.corpUsers});
                })
                .catch(error => console.log(error));
        } else {
            this.setState({organizations: [], users: []});
        }
    }
    componentDidMount() {}
    organizationFormatter(organization) {
        return `Организация: ${organization.Name} ${organization.Idn}`;
    }
    corpUserFormatter(corpUser) {
        return `Пользователь: ${corpUser.LastName} ${corpUser.FirstName} ${corpUser.MiddleName} ${corpUser.Idn}`;
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <SearchForm parentCallback={criteria => this.onSearch(criteria)}/>
                </div>

                <ItemList items={this.state.organizations} format={this.organizationFormatter}/>
                <ItemList items={this.state.users} format={this.corpUserFormatter}/>
            </div>
        );
    }
}

export default App;