import dayjs from "dayjs";

export const formatDate = (
    date: string | number | dayjs.Dayjs | Date | null | undefined,
    format: string = "YYYY-MM-DD HH:mm"
) => dayjs(date).format(format);