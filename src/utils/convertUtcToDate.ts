export function convertUTCToDate(utc: number) {
    const date = new Date(0);
    date.setUTCSeconds(utc);
    return date;

}