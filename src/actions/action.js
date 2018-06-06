export function getUserDetails(userId) {
    return {
        type: 'GET_USER_DETAILS',
        userId,
    }
}

export function saveUserDetails(userDetails) {
    return {
        type: 'SAVE_USER_DETAILS',
        userDetails,
    }
}
