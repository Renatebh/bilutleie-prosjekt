const createTodaysDate = () => {
    return new Date().toISOString().slice(0, -8);
};

export default createTodaysDate;