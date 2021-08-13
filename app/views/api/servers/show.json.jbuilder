json.extract! @server, :id, :name, :owner_id
json.serverChannels(@channels) do |channel|
    json.id channel.id
    json.name channel.name
end