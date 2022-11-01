class RemoveColumnsFromEmergencies < ActiveRecord::Migration[6.1]
  def change
    remove_column :emergencies, :created_at, :datetime
    remove_column :emergencies, :updated_at, :datetime
  end
end
