export const dateToDay = (currentDay) => {
    return new Date(currentDay).toLocaleString('default', { weekday: 'short' });
};

export const transformDate = (currentDate) => {
    const date = new Date(currentDate);

    return {
        day: date.getDate(),
        month: date.toLocaleString('default', {month: 'long'}),
        year: date.getFullYear(),
    };
};