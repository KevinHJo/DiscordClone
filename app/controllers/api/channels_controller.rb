class ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        
        if @channel.save
            render 'api/channels/show'
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def index
        @channels = Channel.all
        render 'api/channels/index'
    end

    def show
        debugger
        @channel = Channel.find(params[:id])
        if @channel
            render 'api/channels/show'
        else
            render json: ['Channel does not exist'], status: 404
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
        render 'api/channels/index'
    end

    private
    def channel_params
        params.require(:channel).permit(:name, :server_id, :private)
    end
end
