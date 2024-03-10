const initstate="Login"
export default function Navreducer(state,action){
switch(action.type) {
    case "Login":
        return "Login";
    case "Registration":
        return "Registration";
    default:
        return "Registration";
}
}