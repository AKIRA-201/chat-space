## members table

|Column|Type|Options|
|------|----|-------|
|member_id|integer|null:true, foreign_key: true|
|name|text|null:true, foreign_key: true|

### Association
- has_nany :users
- belongs_to :members

## groups table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|type|null: false, foreign_key: true|

### Association
- has_many :users, through :members
- has_many :message

## users table

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :message
- has_many :group through members

### messages table
|Column|Type|Options|
|------|----|-------|
|message|text|null: true|
|image|string|null: true|

### Asscociation
- belongs_to :users, :groups

