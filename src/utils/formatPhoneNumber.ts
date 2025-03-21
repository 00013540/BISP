export const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    let phone = value.replace(/\D/g, '');

    // Enforce max length of 9 digits (after country code)
    phone = phone.substring(0, 9);

    // Format: +998(xx)xxx-xx-xx
    if (phone.length > 2) {
        return `+998(${phone.substring(0, 2)})${phone.substring(2, 5)}-${phone.substring(5, 7)}-${phone.substring(7, 9)}`;
    }
    return `+998(${phone}`;
};
