class PlanesController < ApplicationController

  def index
    render json: Plane.all
  end

  def create
    @plane = Plane.create(plane_params)
    render json: @plane
  end

private

  def plane_params
    params.require(:plane).permit(:name, :rows, :aisles)
  end

end
