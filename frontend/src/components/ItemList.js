import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


const mapStateToProps = state => ({
    userId: state.userId,
    groupId: state.groupId
});

class ItemList extends Component {
    render() {
        const {groupId} = this.props;
        return (
            <div>
                <p>
                    {groupId} 
                </p>
                <p>
                    
                </p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(withRouter(ItemList))
