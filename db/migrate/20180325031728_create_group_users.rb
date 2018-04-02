class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :groups, foregin_key: true, index: true
      t.references :user, foregin_key: true, index: true
      t.timestamps
    end
  end
end
