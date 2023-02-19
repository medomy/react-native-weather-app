import dateFormat from 'dateformat'
import { convertUTCToDate } from './convertUtcToDate'
export function formatDateBasic(utc: number) {
    return dateFormat(convertUTCToDate(utc), "dddd, d mmmm");
}

export function formatDateToDayShortcut(utc: number) {
    return dateFormat(convertUTCToDate(utc), "ddd");
}