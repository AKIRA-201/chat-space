## members table

|Column|Type|Options|
|------|----|-------|
|member_id|integer|null:true, foreign_key: true|
|name|text|null:true|

### Association
- belongs_to :users
- belongs_to :groups

## groups table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|type|null: false|

### Association
- has_many :users, through :members
- has_many :members
- has_many :messages

## users table

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :message
- has_many :groups through members
- has_many :members

### messages table
|Column|Type|Options|
|------|----|-------|
|message|text|null: true|
|image|string|null: true|

### Asscociation
- belongs_to :users
- belongs_to :groups

