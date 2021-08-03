class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user

    #CLLLR
    def current_user
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def logout!
        session[:session_token] = nil
        @current_user.reset_session_token!
        @current_user = nil
    end

    def require_logged_in
        render json: ['Please Login to continue'] unless logged_in?
    end
end