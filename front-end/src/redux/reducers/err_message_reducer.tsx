export default function ErrMessageReducer(state: string|boolean = false, action: any) {
    switch (action.type) {
        case "ERRMESSAGEACTION":
            return action.errMessage
        default:
            return state
    }
}