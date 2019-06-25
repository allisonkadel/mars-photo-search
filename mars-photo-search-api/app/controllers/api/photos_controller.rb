class Api::PhotosController < ApplicationController

  MARS_API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos'

  def search
    resp = Faraday.get MARS_API_URL do |req|
      req.params['sol'] = params['sol']
      req.params['camera'] = params['camera']
    end

    body = JSON.parse(resp.body)
    render :json => body['photos']
  end

end

# Things left to do:

# Clear form after Submit
# Display header describing results or Display 'no results found' message
# build server side validation
# write test suite
