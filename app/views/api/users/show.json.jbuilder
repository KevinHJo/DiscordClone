json.set! @user.id do
    json.extract! @user, :username, :email, :session_token, :password_digest
end