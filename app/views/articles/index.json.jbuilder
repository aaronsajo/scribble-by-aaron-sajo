# frozen_string_literal: true

json.articles @articles do |article|
  json.extract! article, :id, :title, :body, :status
  json.author User.first.name
  json.category article.category_id? ? article.category.name : ""
  json.date article.Published? ? article.updated_at.to_date.to_formatted_s(:long_ordinal) : "-"
end
json.draft @articles.where(status: "Draft").count
json.published @articles.where(status: "Published").count
