import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Hidden, Icon, IconButton, TextField, Typography} from '@material-ui/core';
import * as Actions from './store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {FuseAnimate} from '@fuse';

const styles = theme => ({
    root: {}
});

class ContactsHeader extends Component {
    state = {
        searchKey: ''
    };
    searchByKey(event){
        const val = event.target.value;
        this.setState({
            searchKey: val
        });
        this.props.getContacts(val);
    }

    render()
    {
        const {classes, setSearchText, searchText, pageLayout} = this.props;
        return (
            <div className={classNames(classes.root, "flex flex-1 flex-col sm:flex-row items-center justify-between p-24")}>

                <div className="flex flex-1 items-center">
                    <Hidden lgUp>
                        <IconButton
                            onClick={(ev) => pageLayout().toggleLeftSidebar()}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>

                    <div className="flex items-center">
                        <FuseAnimate animation="transition.expandIn" delay={300}>
                            <Icon className="text-32 mr-12">account_box</Icon>
                        </FuseAnimate>
                        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                            <Typography variant="title">Contacts</Typography>
                        </FuseAnimate>
                    </div>
                </div>

                <div className="flex items-center">

                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon color="action">search</Icon>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <TextField
                            placeholder="Get Your Items"
                            className="pl-16"
                            fullWidth
                            value={this.state.searchKey}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            onChange={this.searchByKey.bind(this)}
                        />
                    </FuseAnimate>
                </div>
            </div>
        )
            ;
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText: Actions.setSearchText,
        getContacts: Actions.getContacts
    }, dispatch);
}

function mapStateToProps({contactsApp})
{
    return {
        searchText: contactsApp.contacts.searchText
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(ContactsHeader));
