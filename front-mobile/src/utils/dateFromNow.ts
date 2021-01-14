import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}

export default dateFromNow;
