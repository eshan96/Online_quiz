class Question < ApplicationRecord

  has_many :options
  belongs_to :clazz
  has_one :answer
end
