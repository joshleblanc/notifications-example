import { Controller } from 'stimulus'
import { notifier, NotificationDisplay } from '@beyonk/svelte-notifications/src/index';
import consumer from "../channels/consumer";

export default class extends Controller {
  connect() {
    const t = new NotificationDisplay({
      target: this.element
    });

    console.log(this.element);

    consumer.subscriptions.create({
      channel: "NotificationsChannel"
    }, {
      received(data) {
        console.log(data);
        notifier.info(data.message);
      }
    });

  }
}
