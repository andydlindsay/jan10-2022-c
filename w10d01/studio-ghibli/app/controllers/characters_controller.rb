class CharactersController < ApplicationController
  def index
    @movie = Movie.find params[:movie_id]

    @characters = @movie.characters

    render json: {
      character: @characters,
      movie: @movie
    }
  end
end
