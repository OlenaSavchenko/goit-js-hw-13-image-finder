import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';

export default {
  totalNummber(totalValue) {
    PNotify.success({
      text: `We found ${totalValue} images!`,
    });
  },
};
