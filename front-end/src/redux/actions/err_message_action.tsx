export const ErrMessageAction = (errMessage: string|boolean) => ({
    type: 'ERRMESSAGEACTION',
    errMessage: errMessage,
})