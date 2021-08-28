class Api::ServersController < ApplicationController
    def index
        if params[:user_id]
            @servers = User.find(params[:user_id]).servers
        else
            @servers = Server.all
        end

        @channels = {};
        @servers.each do |server|
            @channels[server.id] = server.channels
        end
        render 'api/servers/index'
    end

    def show
        @server = Server.find(params[:id])
        @channels = @server.channels
        if @server
            render 'api/servers/show'
        else
            render json: ['Server does not exist'], status: 404
        end
    end

    def create
        @server = Server.new(server_params)

        if @server.save
            render 'api/servers/show'
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def destroy
        @server = Server.find(params[:id])
        @server.destroy
        render 'api/servers/index'
    end

    private
    def server_params
        params.require(:server).permit(:name, :owner_id)
    end
end
