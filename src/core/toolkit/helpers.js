export const getBaseUrlFromEnv = () => {
    const urlFromEnvironment = {
        development: 'https://xlaux-b3b674c8b7d0.herokuapp.com',
        production: 'production-url',
        testing: 'testing-url',
    }
    const env = process.env.NODE_ENV;
    return urlFromEnvironment[env];
}

export const attachQueryFieldsToUrl = (url, parameters) => {
    let finalUrl = `${url}?`;
    const parameterNames = Object.keys(parameters);
    for (let i = 0; i < parameterNames.length; i++) {
        const param = parameterNames[i];
        const value = parameters[param];
        if (i === 0) {
            finalUrl += `${param}=${value}`;
        } else {
            finalUrl += `&${param}=${value}`;
        }
    }
    return finalUrl;
}


export const LoadingStates = {
    base: "base",
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}
