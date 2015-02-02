class PlanesController < ApplicationController

  def index
    @planes = Plane.all
    render json: @planes
  end

  def create
    @plane = Plane.create(plane_params)
    render json: @plane
  end

  def makeflight
  end

private

  def plane_params
    params.require(:plane).permit(:name, :rows, :aisles)
  end

end
