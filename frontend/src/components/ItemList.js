import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from '../utils/firebase-setup';
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
            // snapshot.val().forEach(block => {
            //     console.log(block);
            // });

    selectItem(itemId) {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt/' + itemId + '/user');
        text.set(this.state.userId);
    }
    // need other stuff for when other people select items
    // logic against selecting other ppls items
    // assigning colors to each user - generate rgb or some shit idfk

    render() {
        
        return (
            <div>
                <p>
                    {this.state.userId}
                </p>
                <p>
                    {this.state.groupId}
                </p>
            </div>
        );
    }
}

export default withRouter(ItemList)
