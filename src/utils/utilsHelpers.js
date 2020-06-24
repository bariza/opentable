export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const stringContains = (string, pattern) => {
    return string.toUpperCase().indexOf(pattern.toUpperCase()) !== -1;
};