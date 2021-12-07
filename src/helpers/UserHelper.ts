import axios from 'axios';
import { AuthenticationError } from 'apollo-server-express'
import { UserInput, UserUpdateInput } from '../schemas/User';

import jwt_decode from "jwt-decode";
import { TokenJwtPayload } from '../interfaces/Jwt';

const BASE_URL: string = 'https://overide-user-microservice.herokuapp.com';

export async function getTokens(username: string, password: string) {
    const body = {
        username,
        password
    };
    const { data } = await axios.post(`${BASE_URL}/api/login/`, body);
    return data;
}

export async function getRefreshToken(refresh: string) {
    const body = {
        refresh
    }
    const { data } = await axios.post(`${BASE_URL}/api/login/refresh/`, body);
    return data;
}

export async function allUsers(token: string) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const { data } = await axios.get(`${BASE_URL}/api/users/all/`, config);
        return data
    } catch (error) {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function getUserById(id: number, token: string) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const { data } = await axios.get(`${BASE_URL}/api/users/id/${id}`, config);
        return data
    } catch (error) {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function hasUserPermission(token: string) {
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    const { is_staff } = await getUserById(user_id, token);
    return is_staff;
}

export async function createUser(user: UserInput) {
    const body = {
        username: user.username,
        email: user.email,
        name: user.name,
        last_name: user.last_name,
        document: user.document,
        birth: user.birth,
        phone: user.phone,
        password: user.password
    }
    try {
        const { data } = await axios.post(`${BASE_URL}/api/users/create/`, body);
        return 'Usuario creado correctamente';
    } catch (error) {
        throw new AuthenticationError('Error de creacion');
    }
}

export async function updateUser(id: number, token: string, user: UserUpdateInput) {
    const body = {
        email: user.email,
        name: user.name,
        last_name: user.last_name,
        document: user.document,
        birth: user.birth,
        phone: user.phone
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        const { data } = await axios.put(`${BASE_URL}/api/users/id/${id}`, body, config);
        return 'Usuario Actualizado correctamente';
    } catch (error) {
        throw new AuthenticationError('Error de creacion');
    }
}

export async function updatePassword(id: number, token: string, password: string) {
    const body = {
        password
    };
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const { data } = await axios.put(`${BASE_URL}/api/users/password/${id}`, body, config);
        return 'Contraseña actualizada correctamente';
    } catch (error) {
        throw new AuthenticationError('Error de actualizacion');
    }
}

export async function deleteUserById(id: number, token: string) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const { data } = await axios.delete(`${BASE_URL}/api/users/id/${id}`, config);
        return 'Usuario eliminado correctamente';
    } catch (error) {
        throw new AuthenticationError('Error al eliminar el usuario');
    }
}