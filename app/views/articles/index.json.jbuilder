# frozen_string_literal: true

json.articles @articles do |article|
  json.extract! article, :id, :title, :body, :status
  json.author "Oliver"
  json.category article.category.name
  json.date article.created_at.to_date.to_formatted_s(:long_ordinal)
end
json.draft @articles.where(status: "Draft").count
json.published @articles.where(status: "Published").count
