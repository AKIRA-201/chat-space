class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text  :content
      t.text  :image
      t.references :group, foreign_key: true, index: true
      t.references :user, foreing_key: true, index: true
      t.timestamps
    end
  end
end
