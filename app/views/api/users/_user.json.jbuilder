json.extract! user, :id, :username, :email, :session_token, :password_digest
json.friends(user.friends) do |friend|
    json.id friend.id
    json.username friend.username
end