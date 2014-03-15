class Post < ActiveRecord::Base
  belongs_to :user_id, class_name: User
  has_many :comments, -> { order :priority }, foreign_key: :list_id, dependent: :destroy

  validates :user_id, presence: true
  validates :name, presence: true
end
