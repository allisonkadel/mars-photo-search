class Api::PhotosController < ApplicationController

  API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos'

  def search
    resp = Faraday.get API_URL do |req|
      req.params['sol'] = params['sol']
      req.params['camera'] = params['camera']
    end

    body = JSON.parse(resp.body)
    render :json => body['photos']
  end

end

# Where we left off:

# built Faraday request and added gem to gemfile, but get a NameError
# left off on minute 33 in Learn Instruct video
