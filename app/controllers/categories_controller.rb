# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show edit update destroy ]
  def index
    @categories = Category.all
  end

  def create
    if (category = Category.new(category_params)) && category.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Category") }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name)
    end
end
