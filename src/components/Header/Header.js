import React, {useState} from 'react'
import './Header.sass'
import {Link, withRouter} from 'react-router-dom'
import {DishesButton} from '../../components'
import logoSVG from '../../images/logo2.svg'
import {useSelector} from 'react-redux'
import {Navbar, Logo, HeaderContacts} from '../index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHryvnia} from "@fortawesome/free-solid-svg-icons"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

function Header({location}) {
	const {totalPrice, totalCount} = useSelector(({cart}) => cart)
	const ifMainPage = location.pathname === '/'

	return (
		<div className="header">
			<div className="header__wrapper">
			{/* {ifMainPage ? <HeaderContacts/> : ''} */}
			<div className="header__container">
				<Logo image={logoSVG} title='Ресторан' subtitle='італійської кухні'/>
				<Navbar/>
				<div className="header__cart">
					<Link to='/cart'>
						<DishesButton className="button--cart">
						<span>{totalPrice}</span><FontAwesomeIcon icon={faHryvnia}/>
						<div className="button__delimiter"></div>
						<FontAwesomeIcon icon={faShoppingBasket}/>
						<span>{totalCount}</span>
						</DishesButton>
					</Link>
				</div>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Header)
