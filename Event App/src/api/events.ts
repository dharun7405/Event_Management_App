import type { EventData } from "../types";
import { API_BASE_URL, apiFetch } from "./api";

export const fetchEvents = async (): Promise<EventData[]> => {
    try {
        const response = await apiFetch(`${API_BASE_URL}/v1/events`);

        if (!response.ok) {
            throw new Error(`API error:${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
};

export const createEvent = async (event: Omit<EventData, "id" | "ownerId">
): Promise<EventData> => {
    try {
        const response = await apiFetch(`${API_BASE_URL}/v1/events`, {
            method: "POST",
            body: JSON.stringify(event),
        });

        if (!response.ok) {
            throw new Error(`API error:${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
};

export const deleteEvent = async (eventId: number)
    : Promise<void> => {
    try {
        const response = await apiFetch(`${API_BASE_URL}/v1/events/${eventId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`API error:${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting event ${eventId} `, error);
        throw error;
    }
};

export const fetchEventById = async (eventId: number)
    : Promise<EventData> => {
    try {
        const response = await apiFetch(`${API_BASE_URL}/v1/events/${eventId}`);

        if (!response.ok) {
            throw new Error(`API error:${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching event ${eventId} `, error);
        throw error;
    }
};