# frozen_string_literal: true

class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  private

    # Only allow a list of trusted parameters through.
    def article_params
      params.require(:article).permit(:title, :body, :category_id)
    end
end
