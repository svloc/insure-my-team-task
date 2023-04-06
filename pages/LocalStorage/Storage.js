import { toJSON, jsonToString} from "../CommonFunction/CommonFuction";

export const getAccount = () => toJSON(localStorage.getItem('account'));

export const setAccount = (account) => toJSON(localStorage.setItem('account', jsonToString(account)));
