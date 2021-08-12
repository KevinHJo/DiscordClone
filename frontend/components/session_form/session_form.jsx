import React from 'react';
import {} from '../../actions/session_actions'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            birthDate: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.includeUsername = this.includeUsername.bind(this);
        this.renderWelcomeMessage = this.renderWelcomeMessage.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
        this.props.removeSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value})
    }

    includeUsername() {
        if (this.props.formType === 'Signup') {
            return (
                <div className='input'>
                    <label htmlFor="username">USERNAME</label>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        spellCheck={false}
                        id="username"
                    />
                </div>
            )
        }
    }

    renderErrors() {
        if (this.props.errors[0]) {
            return (
                <ul className='session-form-errors'>
                    {
                        this.props.errors.map((error, i) => {
                            return <li key={i}>{error}</li>
                        })
                    }
                </ul>
            );
        }
    }

    renderWelcomeMessage() {
        switch (this.props.formType) {
            case 'Login':
                return (
                    <div className='form-welcome'>
                        <h2>Welcome back!</h2>
                        <h3>We're so excited to see you again!</h3>
                    </div>
                );
            case 'Signup':
                return (
                    <div className='form-welcome'>
                        <h2 className='signup-header'>Create an account</h2>
                    </div>
                )
            default:
                return null;
        }
    }

    render() {
        const {formType} = this.props;
        return (
            <div className='session-form'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderWelcomeMessage()}
                    {this.renderErrors()}
                    <div className='input-fields'>
                        <div className="input">
                            <label htmlFor='email'>EMAIL</label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                spellCheck={false}
                                id='email'
                            />
                        </div>

                        {this.includeUsername()}

                        <div className='input'>
                            <label htmlFor='password'>PASSWORD</label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                id='password'
                            />
                        </div>

                        <button type="submit">{formType}</button>
                        {this.props.navLink}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;