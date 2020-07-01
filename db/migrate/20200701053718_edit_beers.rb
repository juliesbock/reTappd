class EditBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :ibu, :float
  end
end
