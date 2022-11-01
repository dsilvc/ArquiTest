class ChangeTypeToTipo < ActiveRecord::Migration[6.1]
  def change
    rename_column :emergencies, :type, :tipo
  end
end
