## members table

|Column|Type|Options|
|------|----|-------|
|member_id|integer|foreign_key: true|
|name|string|

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
|e-mail_address|string|null: false|
|pass_word|string|null: false|

### Association
- has_many :messages
- has_many :groups through :members
- has_many :members

### messages table
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|

### Asscociation
- belongs_to :user
- belongs_to :group

