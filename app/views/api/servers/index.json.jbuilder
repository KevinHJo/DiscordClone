@servers.each do |server|
    json.set! server.id do
        json.partial! 'api/servers/server', server: server
        json.serverChannels(@channels[server.id]) do |channel|
            json.id channel.id
            json.name channel.name
        end
    end
end