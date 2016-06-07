class CreateMuppets < ActiveRecord::Migration
  def change
    create_table :muppets do |t|
      t.string :name
      t.text :description
      t.timestamps
    end
  end
end
