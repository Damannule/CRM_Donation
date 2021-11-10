import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    CRM - Donation
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/users/list" className="nav-link">
                                Liste des utilisateurs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/add" className="nav-link">
                                Créer un utilisateur particulier
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/users/update/:id" className="nav-link">
                                Modifier un utilisateur
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/auth/register" className="nav-link">
                                S'inscrire
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links