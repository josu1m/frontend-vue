import axios from "axios";
import type { AxiosResponse } from "axios";

const apiUrl = "http://127.0.0.1:8000/api"; // Asegúrate de que la URL sea correcta

export interface UserProfileData {
    id: number;
    name: string;
    email: string;
}

export const fetchUserProfile = async (): Promise<UserProfileData | null> => {
    try {
        const response: AxiosResponse<{ userData: UserProfileData }> = await axios.get(
            `${apiUrl}/userProfile`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("auth_token")}`, // Asumiendo que el token está en localStorage
                },
            }
        );
        return response.data.userData;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};

export const updateUserProfile = async (
    userData: UserProfileData
): Promise<UserProfileData | null> => {
    try {
        const response: AxiosResponse<{ userData: UserProfileData }> = await axios.put(
            `${apiUrl}/updateProfile`,
            userData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
                },
            }
        );
        return response.data.userData;
    } catch (error) {
        console.error("Error updating user profile:", error);
        return null;
    }
};
