## members table

|Column|Type|Options|
|------|----|-------|
|member_id|integer|foreign_key: true|
|name|text|

### Association
- belongs_to :user
- belongs_to :group

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through :members
- has_many :members
- has_many :messages

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :groups through :members
- has_many :members

### messages table
|Column|Type|Options|
|------|----|-------|
|message|text|
|image|string|

### Asscociation
- belongs_to :user
- belongs_to :group

