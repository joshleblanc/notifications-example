# frozen_string_literal: true

class NotificationReflex < ApplicationReflex
  def notify
    NotificationsChannel.broadcast_to(
      request.session.id,
      message: "Hello there!"
    )
  end
end
