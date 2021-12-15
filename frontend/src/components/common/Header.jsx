import React from 'react'
import logo from '../../assets/img/logo.png'

function Header() {
    return (
        <div>
            <header class="header">
			<a href="#">
				<img src={logo} alt="" />
			</a>
			<div class="signin">
				<a href="/#">Signin</a>
			</div>
			<div class="signup">
				<a href="/#">Signup</a>
			</div>
		</header>
        </div>
    )
}

export default Header
