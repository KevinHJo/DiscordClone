@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :server_id, :private
    end
end