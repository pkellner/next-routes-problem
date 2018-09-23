import React, {Component} from 'react';

class error404 extends Component {

    static async getInitialProps({query}) {
        console.log("getInitialProps qerror404");
        return {};
    }

    render() {
        return (
            <div>
                <b>error 404 page here</b>
            </div>
        );
    }
}

error404.propTypes = {};
error404.defaultProps = {};

export default error404;
