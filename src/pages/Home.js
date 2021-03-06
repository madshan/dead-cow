import React, { Component } from 'react'
import Cover from '../components/Cover'
import GoogleMap from '../components/GoogleMap'
// import MenuFavorites from '../components/MenuFavorites'
// import DailySpecials from '../components/DailySpecials'

import About from '../components/About'

export default class Home extends Component {

	render() {

		return (
			<div className="home">
				<Cover children={this.props.children} />
				<div className="page-content">
					<div className="container">
						<div className="about-snippets">
							<About slug={'concept'} />
							<About slug={'name'} />
							<About slug={'chef'} />
						</div>
					</div>
				</div >
				<GoogleMap />
			</div >
		)
	}
}
