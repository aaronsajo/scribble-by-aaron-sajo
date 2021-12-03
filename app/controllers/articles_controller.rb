# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :set_article, except: %i[ create index ]
  before_action :load_category, only: :create

  def index
    @articles = Article.all
  end

  def create
    article = @category.articles.new(article_params)
    if article.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Article") }
    else
      render status: :unprocessable_entity, json: { error: article.errors.full_messages.to_sentence }
    end
  end

  def show
  end

  def update
    if @article.update!(article_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @article.destroy!
      render status: :ok, json: { notice: t("successfully_deleted", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :body, :category_id, :status)
    end

    def set_article
      @article = Article.find_by_id!(params[:id])
    end

    def load_category
      @category = Category.find_by_id!(article_params[:category_id])
    end
end
