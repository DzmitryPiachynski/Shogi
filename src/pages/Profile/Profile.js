import React from "react";
import './profile.css'

function Profile() {
    return (
        <div className="container">
            <div className="profile-info">
                <div className="columns-container">
                    <div className="first-column">
                        <p>Username</p>
                        <input type="text" placeholder="Username"/>
                        <p>Last name</p>
                        <input type="text" placeholder="Last name"/>
                        <p>Country</p>
                        <input type="text" placeholder="Country"/>
                    </div>
                    <div className="second-column">
                        <p>First name</p>
                        <input type="text" placeholder="First name"/>
                        <p>Age</p>
                        <input type="text" placeholder="Age"/>
                        <p>Email</p>
                        <input type="text" placeholder="Email"/>
                    </div>
                </div>
                <button className="button-save">Save</button>
            </div>
            <div className="profile-stats">
                <div className="profile-points">
                    <p>Total points</p>
                    <input type="text" placeholder="Total points" value="9999" readOnly/>
                </div>
                <div className="profile-matches">
                    <p>Matches played</p>
                    <input type="text" placeholder="Matches played" value="9999" readOnly/>
                </div>
                <div className="profile-rank">
                    <p>Rank</p>
                    <input type="text" placeholder="Rank" value="9999" readOnly/>
                </div>
            </div>
        </div>
    );
}

export default Profile;