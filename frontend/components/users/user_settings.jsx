import React from 'react';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='user-settings-container'>
                <div className='user-settings'>
                    <div className='user-settings-nav'>
                        <li className='my-account-nav'>My account</li>
                        <button onClick={this.props.logout}>Log Out</button>
                    </div>
                    <div className='my-account'>
                        <h2>My account</h2>
                        <div className='account-card'>
                            <span className='account-banner'></span>
                            <div className='account-info'>
                                <div className='account-username'>
                                    <img src={'/images/pfp.png'} />
                                    <h1>{this.props.currentUser.username}</h1>
                                </div>

                                <div className='account-edit'>
                                    <span className='username'>
                                        <div>
                                            <h3>Username</h3>
                                            <h2>{this.props.currentUser.username}</h2>
                                        </div>
                                        <button className='account-edit-button'>Edit</button>
                                    </span>
                                    <span className='email'>
                                        <div>
                                            <h3>Email</h3>
                                            <h2>{this.props.currentUser.email}</h2>
                                        </div>
                                        <button className='account-edit-button'>Edit</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSettings;