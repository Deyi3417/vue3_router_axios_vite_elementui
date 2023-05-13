import dayjs from 'dayjs';

// 定义时间格式常量
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATETIME_FORMAT_H = 'YYYY-MM-DD HH:mm';

/**
 * 格式化时间的函数 YYYY-MM-DD HH:mm:ss
 *
 * @param date 日期
 * @param format 格式
 */
export function formatDate(date: string | number | Date, format: string): string {
    return dayjs(date).format(format);
}

/**
 * 格式化时间的函数 YYYY-MM-DD HH:mm:ss
 *
 * @param date 日期
 */
export function formatDate_1(date: string | number | Date): string {
    return formatDate(date, DATETIME_FORMAT)
}

/**
 * 格式化时间的函数 YYYY-MM-DD
 *
 * @param date 日期
 */
export function formatDate_2(date: string | number | Date): string {
    return formatDate(date, DATE_FORMAT);
}

/**
 * 格式化时间的函数 YYYY-MM-DD HH:mm
 *
 * @param date 日期
 */
export function formatDate_3(date: string | number | Date): string {
    return formatDate(date, DATETIME_FORMAT_H);
}

