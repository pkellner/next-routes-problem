import React, {Component} from 'react';
import {Link} from '../routes'

class speaker extends Component {

    static async getInitialProps({query}) {

        console.log("getInitialProps speaker");

        if (query && query.ccYear) {
            console.log("query.ccYear:" + query.ccYear);
        }

        console.log("...");

        return {};
    }

    render() {
        return (
            <div>
                <b>speaker</b>
                <hr/>
                <Link route='/' >
                    <a>home</a>
                </Link>
            </div>
        );
    }
}

speaker.propTypes = {};
speaker.defaultProps = {};

export default speaker;
