require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.i18n.default_locale = :ja
    config.time_zone = 'Tokyo'
    Time::DATE_FORMATS[:default] = '%Y/%m/%d %H:%M'
    Time::DATE_FORMATS[:datetime] = '%Y/%m/%d %H:%M'
    Time::DATE_FORMATS[:date] = '%Y/%m/%d'
    Time::DATE_FORMATS[:time] = '%H:%M:%S'
    Date::DATE_FORMATS[:default] = '%Y/%m/%d'
  end
end
