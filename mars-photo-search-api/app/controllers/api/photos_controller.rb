class Api::PhotosController < ApplicationController

  API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos'

  def search
    resp = Faraday.get API_URL do |req|
      req.params['sol'] = params['sol']
      req.params['camera'] = params['camera']
    end
    byebug
  end
end
