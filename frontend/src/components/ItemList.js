import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from '../utils/firebase-setup';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';

class ItemList extends Component {
    constructor(props) {
        super(props)
    
        const query = queryString.parse(this.props.location.search);
        const keys = Object.keys(query);
    
        this.state = {
          userId: query["user"],
          groupId: query["group"],
          text: []
        }
        
        this.getText = snap => {
            if (snap.val()) this.setState({ text: snap.val() });
        };

        this.getText = this.getText.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    componentDidMount() {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt');
        text.on('value', this.getText);
    }

    componentWillUnmount() {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt');
        text.off('value', this.getText);
    }

    selectItem(itemId) {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt/' + itemId + '/user');
        text.set(this.state.userId);
    }

    unselectItem(itemId) {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt/' + itemId + '/user');
        text.remove();
    }

    // need other stuff for when other people select items
    // logic against selecting other ppls items
    // assigning colors to each user - generate rgb or some shit idfk

    render() {
        return (
            <div>
                <div>
                    {this.state.text.map((item, index) => {
                        return (
                        item.user ?
                            (item.user == this.state.userId) ?
                                (<Button variant="contained" color="secondary" id={index} onClick={() => this.unselectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                                </Button>)
                                :
                                (<Button variant="contained" color="primary" id={index} onClick={() => this.selectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                                </Button>)
                            :
                            (<Button variant="contained" id={index} onClick={() => this.selectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                            </Button>)
                    )})}
                </div>
                <div>
                    <Button variant="contained" color="secondary">
                        Enter
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(ItemList)
