# frozen_string_literal: true

class ArticlesController < ApplicationController
  before_action :set_article, only: %i[ show update destroy ]

  def index
    @articles = Article.all
  end

  def create
    if (article = Article.new(article_params)) && article.save
      render status: :ok, json: { notice: t("successfully_created", entity: "Article") }
    else
      render status: :unprocessable_entity, json: { error: article.errors.full_messages.to_sentence }
    end
  end

  def show
  end

  def update
    if @article.update(article_params)
      render status: :ok, json: { notice: t("successfully_updated", entity: "Article") }
    else
      render status: :unprocessable_entity,
        json: { error: @article.errors.full_messages.to_sentence }
    end
  end

  def destroy
    if @article.destroy
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
      @article = Article.find(params[:id])
    end
end
