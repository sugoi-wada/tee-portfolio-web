import { DateTime } from 'luxon'

export const formatDate = (dateStr: string, format = DateTime.DATE_SHORT) => {
  return DateTime.fromISO(dateStr).setZone('Asia/Taipei').toLocaleString(format)
}
