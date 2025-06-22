export const validateEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const validatePassword = password => password.length >= 6;
