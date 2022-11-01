class AddComplejidadToEmergencies < ActiveRecord::Migration[6.1]
  def change
    add_column :emergencies, :complexity, :float, default: 0
  end
end
