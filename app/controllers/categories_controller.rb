# frozen_string_literal: true

class CategoriesController < ApplicationController
  before_action :load_category, except: %i[ create index ]
  def index
    @categories = Category.all.order("created_at Desc")
  end

  def create
    if (category = Category.new(category_params)) && category.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Category") }
    else
      render status: :unprocessable_entity, json: { error: category.errors.full_messages.to_sentence }
    end
  end

  def show
  end

  def update
    if @category.update!(category_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Category") }
    else
      render status: :unprocessable_entity,
        json: { error: @category.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @category.destroy!
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Category") }
    else
      render status: :unprocessable_entity,
        json: { error: @category.errors.full_messages.to_sentence }
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name)
    end

    def load_category
      @category = Category.find_by_id!(params[:id])
    end
end
