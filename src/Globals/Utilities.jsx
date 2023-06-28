import { ROLES } from "./Consts";

export function getRoleNameByRoleId(roleId) {
    return Object.keys(ROLES).find(key => ROLES[key] == roleId);
}