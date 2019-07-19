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

        this.receiptRef = firebase.database().ref('groups/' + this.state.groupId + '/receipt');

        this.getText = this.getText.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        // Subscribe to the database for changes
        this.receiptRef.on('value', this.getText);
    }

    componentWillUnmount() {
        // Unsubscribe from changes
        this.receiptRef.off('value', this.getText);
    }

    selectItem(itemId) {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt/' + itemId + '/user');
        text.set(this.state.userId);
    }

    unselectItem(itemId) {
        var text = firebase.database().ref('groups/' + this.state.groupId + '/receipt/' + itemId + '/user');
        text.remove();
    }

    submit() {
        this.props.history.push('/complete');
    }

    render() {
        return (
            <div>
                <h3>Group number: {this.state.groupId}</h3>
                <div>
                    {this.state.text.map((item, index) => {
                        return (
                        item.user ?
                            (item.user == this.state.userId) ?
                                (<p><Button variant="contained" color="secondary" id={index} onClick={() => this.unselectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                                </Button></p>)
                                :
                                (<p><Button variant="contained" color="primary" id={index} onClick={() => this.selectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                                </Button></p>)
                            :
                            (<p><Button variant="contained" id={index} onClick={() => this.selectItem(index)}>
                                    {"Name: " + item.name + " Price:" + item.price}
                            </Button></p>)
                    )})}
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={this.submit}>
                        Enter
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(ItemList)
