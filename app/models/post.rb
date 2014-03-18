class Post < ActiveRecord::Base
  belongs_to :user
  # has_many :comments, -> { order :priority }, foreign_key: :list_id, dependent: :destroy

  # validates :user_id, presence: true
  # validates :name, presence: true
end
