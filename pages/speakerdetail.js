import React, {Component} from 'react';
import {Link} from '../routes'

class speakerdetail extends Component {

    static async getInitialProps({query}) {

        console.log("getInitialProps speakerdetail");

        if (query && query.slugSpeaker) {
            console.log("query.slugSpeaker:" + query.slugSpeaker);
        }

        if (query && query.ccYear) {
            console.log("query.ccYear:" + query.ccYear);
        }

        console.log("...");

        return {};
    }

    render() {
        return (
            <div>
                <b>speakerdetail</b>
                <hr/>
                <Link route='/' >
                    <a>home</a>
                </Link>
            </div>
        );
    }
}

speakerdetail.propTypes = {};
speakerdetail.defaultProps = {};

export default speakerdetail;
