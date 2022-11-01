class ChangeMessageToText < ActiveRecord::Migration[6.1]
  def change
    change_column :emergencies, :message, :text
  end
end
