class CreateEmergencies < ActiveRecord::Migration[6.1]
  def change
    create_table :emergencies do |t|
      t.string :tipo
      t.float :lat
      t.float :lon
      t.string :location
      t.text :message
      t.integer :level
    end
  end
end
