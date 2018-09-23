import React, {Component} from 'react';
import {Link} from '../routes'
import Router from 'next/router'

class speakerdetail extends Component {

    static async getInitialProps({req,res,query}) {

        console.log("getInitialProps speakerdetail");
        let statusCode = 200;
        let slugSpeaker = '';
        let ccYear = '';
        if (query && query.slugSpeaker) {
            console.log("query.slugSpeaker:" + query.slugSpeaker);
            slugSpeaker = query.slugSpeaker;
        }
        if (query && query.ccYear) {
            console.log("query.ccYear:" + query.ccYear);
            ccYear = query.ccYear;
        }
        if (slugSpeaker != 'douglas-crockford-1124' || ccYear != '2018') {
            if (req) {
                console.log("getInitialProps - res.redirect cause server");
                statusCode = 404;
                res.statusCode = 404;
            } else {
                console.log("getInitialProps - router.push cause client")
                Router.push('/error404');
            }
        }
        return {
            slugSpeaker,
            ccYear,
            statusCode
        };
    }

    render() {

        if (this.props.statusCode == 404) {
            return (
                <div>Not Found</div>
            )
        }

        return (
            <div>
                <b>speakerdetail    {this.props.ccYear}   {this.props.slugSpeaker}   {this.props.statusCode}</b>
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
