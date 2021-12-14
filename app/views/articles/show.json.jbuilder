# frozen_string_literal: true

json.article do
  json.extract! @article, :title, :body, :status
  json.category_id @article.category_id? ? @article.category_id : ""
  json.category_name @article.category_id? ? @article.category.name : ""
end
