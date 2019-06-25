require 'rails_helper'

RSpec.describe 'Photo API', type: :request do

  # GET /api/equipment
  # Return collection of all Equipment

  describe 'GET /api/photos' do

      before { get '/api/photos?sol=0&camera=fhaz' }

      it 'returns a status code of 200' do
          expect(response).to have_http_status(200)
      end

      it 'returns a collection of Photos in JSON' do
          json = JSON.parse(response.body, symbolize_names: true)
          expect(json).not_to be_empty
          expect(json.size).to eq(8)
      end

  end

end
