import React, { Component } from 'react'

export default class Cover extends Component {

	render() {
		return (
			<div className='cover'>
				<div className='background-image'>
					<div className='wrapper'>
						<div className='container'>
							<div className='front-matter'>
								<img className='logo' src='/assets/logo-light.png' alt='Bistro One Twelve at The Tannery logo' />
								<div className='cover-text'>
									<h2 className='slogan'>Decidedly Local,<br />Aggressively Seasonal</h2>
									<h4>NOW OPEN!</h4>
									<div className="chalkBoard">Breakfast and lunch fare, from 7am to 5:30pm, Monday through Friday.
Expanded hours coming soon!</div>
									 <h4>What happened to the cow?!</h4>
                                                                        <div className="chalkBoard">Read about our name change <a href="about#about-name">here.</a></div>


								</div>
							</div>
							<div className='info'>
								<div>
									<a rel='noopener noreferrer' target='blank' href='https://www.google.com/maps/dir//1060+River+St+%23112,+Santa+Cruz,+CA+95060/@36.9867018,-122.0647113,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xdb9dc8e0e174b70b!2m2!1d-122.029606!2d36.986707'>1060 River Street, Santa Cruz, CA 95060</a>
								</div>
								<div>
									<a href='tel:+18318547458'>831.854.7458</a>
								</div>
								<div>
									<a> 7:00am - 5:30pm, Monday - Friday </a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
