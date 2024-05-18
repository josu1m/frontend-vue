import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export const logout = async (token: string) => {
    try {
        const response = await axios.post(
            `${apiUrl}/logout`,
            null,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error al intentar cerrar sesión:", error);
        throw error;
    }
};
