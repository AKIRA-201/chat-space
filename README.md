## members table

|Column|Type|Options|
|------|----|-------|
|member_id|integer|null:true, foreign_key: true|
|name|text|null:true, foreign_key: true|

### Association
- has_nany :user
- belongs_to :member

## groups table

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|name|type|null: false, foreign_key: true|

### Association
- has_many :member through :user

## users table

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :message
- belongs_to :menmber

### messages table
|Column|Type|Options|
|------|----|-------|
|message|text|null: true|
|image|string|null: true|

### Asscociation
- belongs_to :user

