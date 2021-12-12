json.categories @categories do |category|

  json.extract! category,
  :id,
  :name
  json.count category.articles.Published.size
  json.articles category.articles.Published do |article|
    json.extract! article,
    :slug,
    :title,
    :body
    json.date article.updated_at.to_date.to_formatted_s(:long_ordinal)
    json.category category.name
  end
end
