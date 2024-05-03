import React from "react";
import profileImg  from '../images/user.png'
import starFilled  from '../images/star-filled.png'
import starEmpty  from '../images/star-empty.png'

class CardCl extends React.Component{
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true,
    }


    toggleFavorite = () => {
        this.setState(prevContact => ({
            isFavorite: !prevContact.isFavorite
        }))
    }
    render() {
        let starIcon = this.state.isFavorite ? starFilled : starEmpty
        return (
            <main>
                <article className="card">
                    <img src={profileImg} className="card--image"/>
                    <div className="card--info">
                        <img
                            src={starIcon}
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p className="card--contact">{this.state.phone}</p>
                        <p className="card--contact">{this.state.email}</p>
                    </div>

                </article>
            </main>
        )
    }
}

export {CardCl}