import axios from 'axios';
import { AuthenticationError, ApolloError } from 'apollo-server-express';
import jwt_decode from "jwt-decode";
import { TokenJwtPayload } from '../interfaces/Jwt';

import { BookingInput, BookingUpdateInput, PassengerUpdateInput } from '../schemas/Booking';
import { hasUserPermission } from './UserHelper';

const BASE_URL = 'https://overide-bookings-microservice.herokuapp.com';

export async function getAllBookings(token: string) {
    const permission = await hasUserPermission(token);
    if (permission) {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/bookings/all`);
            return data;
        } catch (error) {
            throw new ApolloError('Error en el servidor');
        }
    } else {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function getBookingById(id: string, token: string) {
    const permission = await hasUserPermission(token);
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/id/${id}`)
        if (permission) {
            return data;
        } else {
            if (user_id === data.user_id) {
                return data;
            } else {
                throw new AuthenticationError('No tiene los permisos necesarios');
            }
        }
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }

}

export async function getBookingByRideId(id: number, token: string) {
    const permission = await hasUserPermission(token);
    if (permission) {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/bookings/all/ride/id/${id}`);
            return data;
        } catch (error) {
            throw new ApolloError('Error en el servidor');
        }
    } else {
        throw new AuthenticationError('No tiene los permisos necesarios');
    }
}

export async function getBookingByUserId(id: number, token: string) {
    const permission = await hasUserPermission(token);
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/all/user/id/${id}`);
        if (permission || user_id === id) {
            return data;
        } else {
            throw new AuthenticationError('No tiene los permisos necesarios');
        }
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }
}

export async function getOccupiedSeatsByRideId(id: number) {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/seats/ride/id/${id}`);
        return data;
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }
}

export async function createBooking(input: BookingInput) {
    try {
        const { data } = await axios.post(`${BASE_URL}/api/bookings/create`, input);
        return 'Reserva creada correctamente';
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }

}

export async function updateBookingById(id: string, input: BookingUpdateInput, token: string) {
    const permission = await hasUserPermission(token);
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/id/${id}`);
        if (permission || user_id === data.user_id) {
            try {
                const { data } = await axios.put(`${BASE_URL}/api/bookings/id/${id}`, input);
                return 'Reserva actualizada correctamente';
            } catch (error) {
                throw new ApolloError('Error en el servidor');
            }
        } else {
            throw new AuthenticationError('No tiene los permisos necesarios');
        }
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }
}

export async function updateBookingPassenger(booking_id: string, passenger_id: string, input: PassengerUpdateInput, token: string) {
    const permission = await hasUserPermission(token);
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/id/${booking_id}`);
        if (permission || user_id === data.user_id) {
            try {
                const { data } = await axios.put(`${BASE_URL}/api/bookings/id/${booking_id}/passenger/id/${passenger_id}`, input);
                return 'Reserva actualizada correctamente';
            } catch (error) {
                throw new ApolloError('Error en el servidor');
            }
        } else {
            throw new AuthenticationError('No tiene los permisos necesarios');
        }
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }
}

export async function deleteBooking(id: string, token: string) {
    const permission = await hasUserPermission(token);
    const { user_id } = jwt_decode<TokenJwtPayload>(token);
    try {
        const { data } = await axios.get(`${BASE_URL}/api/bookings/id/${id}`);
        if (permission || user_id === data.user_id) {
            try {
                const { data } = await axios.delete(`${BASE_URL}/api/bookings/id/${id}`);
                return 'Reserva eliminada correctamente';
            } catch (error) {
                throw new ApolloError('Error en el servidor');
            }
        } else {
            throw new AuthenticationError('No tiene los permisos necesarios');
        }
    } catch (error) {
        throw new ApolloError('Error en el servidor');
    }
}