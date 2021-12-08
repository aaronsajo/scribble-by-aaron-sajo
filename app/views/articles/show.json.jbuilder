# frozen_string_literal: true

json.article do
  json.extract! @article, :title, :body, :status, :category_id
end
json.category_name @article.category_id? ? @article.category.name : ""
