class CreateEmergencies < ActiveRecord::Migration[6.1]
  def change
    create_table :emergencies do |t|
      t.string :type
      t.float :lat
      t.float :lon
      t.string :location
      t.string :message
      t.integer :level

      t.timestamps
    end
  end
end
