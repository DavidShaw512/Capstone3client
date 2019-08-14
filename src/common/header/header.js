import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import MainMenu from './mainMenu';
import { menuToggle, MENU_TOGGLE } from '../../modules/header'

import './header.css'

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showMenu: false
    //     }
    // }

    handleMenuToggle = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    // More ARIA-friendly method for click-away menu closing, needs work
    handleMenuBlur = () => {
        this.setState({ showMenu: false })
    }

    // The MainMenu component will change based on login status
    render() {
        return (
            <div className="headerContainer">
                <div className="headerContent">
                    <h1 className="headerTitle"><Link to='/'>Sammie</Link></h1>
                    <div className="headerMenu">
                        <button className="headerMenuButton" onClick={this.props.menuToggle}>
                            Menu
                        </button>
                        <MainMenu show={this.props.showMenu}/>
                    </div>
                </div>
            </div>
        );
    }
};

// All the keys in the 'return' statements below can 
// be accessed as props in the component above
const mapStateToProps = (state) => {
    return {
        showMenu: state.header.showMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuToggle: () => {
            dispatch(menuToggle());
            console.log("Toggling Menu")
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// export default Header;