FactoryBot.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/3265.jpeg")
    user
    group
  end
end