json.array! @messages do |message|
  json.content message content
  json.image message.image
  json.user_name message.user.user_name
  json.created_at message.created_at.strrfitime('%Y%M%D %D%Y')
end