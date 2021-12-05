import axios from 'axios';
import { AuthenticationError, ApolloError } from 'apollo-server-express';
import { hasUserPermission } from './UserHelper';
import { CityInput, CityUpdateInput } from '../schemas/Rides'

const BASE_URL: string = 'https://overide-rides-microservice.herokuapp.com';

export async function getAllCities() {
    try {
        const { data } = await axios.get(`${BASE_URL}/cities/all`);
        return data;
    } catch (error) {
        throw new ApolloError('Error del servidor');
    }
}

export async function getCity(id: number, code: string) {
    if (id) {
        const { data } = await axios.get(`${BASE_URL}/cities/id/${id}`);
        return data;
    } else if (code) {
        code = code.toUpperCase();
        const { data } = await axios.get(`${BASE_URL}/cities/code/${code}`);
        return data
    } else {
        throw new ApolloError('El ID o Codigo debe ser valido');
    }
}

export async function createCity(input: CityInput, token: string) {
    const permission = await hasUserPermission(token);
    if (permission) {
        const body = {
            code: input.code,
            name: input.name,
        }
        try {
            const { data } = await axios.post(`${BASE_URL}/cities/create`, body);
            return 'Ciudad creada correctamente';
        } catch (error) {
            throw new ApolloError('Error en el servidor');
        }
    } else {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function updateCity(input: CityUpdateInput, id: number, token: string) {
    const permission = await hasUserPermission(token);
    if (permission) {
        const body = {
            code: input.code,
            name: input.name
        }
        try {
            const { data } = await axios.put(`${BASE_URL}/cities/id/${id}`, body);
            return 'Ciudad actualizada correctamente';
        } catch (error) {
            throw new ApolloError('Error en el servidor');
        }
    } else {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function deleteCity(id: number, token: string) {
    const permission = await hasUserPermission(token);
    if (permission) {
        try {
            const { data } = await axios.delete(`${BASE_URL}/cities/id/${id}`);
            return 'Ciudad eliminada correctamente';
        } catch (error) {
            throw new ApolloError('Error en el servidor');
        }
    } else {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}