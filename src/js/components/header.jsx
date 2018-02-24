import React from "react";
import PropTypes from "prop-types";

import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const Header = (props) => (
    <div>
        {props.path == "./home" && (
            <div className='header'>
                <Link to={props.path}>
                    <div className='title'>Tic Tac Toe</div>
                </Link>
                <div className='title'>Leaderboard</div>
            </div>)}
        {props.path == "./scoreBoard" && (
        <div className='header'>
            <div className='title'>Tic Tac Toe</div>
            <Link to={props.path}>
                <div className='title'>Leaderboard</div>
            </Link>
        </div>
            )}
    </div>);

Header.propTypes = {};
export default Header;
