# frozen_string_literal: true

class ArticlesController < ApplicationController
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

  private

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :body, :category_id, :status)
    end
end
