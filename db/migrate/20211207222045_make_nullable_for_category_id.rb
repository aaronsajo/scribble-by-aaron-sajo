# frozen_string_literal: true

class MakeNullableForCategoryId < ActiveRecord::Migration[6.1]
  def change
    change_column_null :articles, :category_id, true
  end
end
