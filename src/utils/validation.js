export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(password);

    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "Password must be at least 4 characters and include both letters and numbers";

    return null;
}
