import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.includeUsername = this.includeUsername.bind(this);
        this.renderWelcomeMessage = this.renderWelcomeMessage.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
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
                <label>USERNAME
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
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
                        <h2>Create an account</h2>
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
                    <label for='email'>EMAIL</label>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        id='email'
                    />
                    

                    {this.includeUsername()}

                    <label for='password'>PASSWORD</label>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        id='password'
                    />
                    

                    <button type="submit">Login</button>
                    {this.props.navLink}
                </form>

                
            </div>
        )
    }
}

export default SessionForm;