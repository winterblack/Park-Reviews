class Api::ParksController < ApplicationController
  def index
    @parks = Park.all
  end

  def create
  end
end
