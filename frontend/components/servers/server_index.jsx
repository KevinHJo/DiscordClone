import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='server-list-container'>
                <div className='server-home'>
                    <Link to={'/channels/@me'}>
                        <img src={'/images/default_pfp.png'} />
                    </Link>
                    <div className='server-link-name'>
                        <div id='label-triangle'></div>
                        <p>Home</p>
                    </div>
                </div>
                <div id='server-spacer'>' '</div>
                <ul className='server-list'>
                    {this.props.userServers.map(server => {
                        return (
                            <li>
                                <Link to={`/channels/${server.id}/1`}><img src={'/images/default_pfp.png'}/></Link>
                                <div className='server-link-name'>
                                    <div id='label-triangle'></div>
                                    <p>{server.name}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        )
    }
}

export default ServerIndex;