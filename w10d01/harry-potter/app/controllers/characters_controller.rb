class CharactersController < ApplicationController
  def index
    @location = Location.find params[:location_id]
    @characters = @location.characters
  end
end
