import React, {Component} from 'react'
import MenuItem from './MenuItem'

export default class MenuFavorites extends Component {

    render() {

        return (
            <div className='menuFavorites'>
                <div className="container">
                    <h2>Menu Favorites</h2>
                    <MenuItem/>
                </div>

            </div>
        )
    }
}
