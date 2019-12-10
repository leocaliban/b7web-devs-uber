import { connect } from 'react-redux';

import { StackActions, NavigationActions } from 'react-navigation';

const Preload = (props) => {
    if (!props.token) {
        navigate(props, 'Login');
    } else {
        props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        }));
    }
    return null;
};

function navigate(props, page) {
    props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: page })
        ]
    }));
}

const mapStateToProps = (state) => {
    return {
        token: state.UserReducer.token
    };
};

export default connect(mapStateToProps)(Preload);