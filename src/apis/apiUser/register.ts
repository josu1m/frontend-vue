import { reactive } from "vue";
import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

interface FormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const formData = reactive<FormData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

export async function registrar() {
    try {
        const respuesta: AxiosResponse<any> = await axios.post(
            apiUrl + "/register",
            formData
        );
        console.log("Registro exitoso:", respuesta.data);

        // Opcional: Redireccionar a otra página o mostrar un mensaje de éxito

    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const errorAxios: AxiosError<any> = error;
            if (errorAxios.response) {
                console.error("Error en el registro:", errorAxios.response.data);
                // Puedes manejar errores específicos aquí, como mostrar mensajes personalizados en función del código de error
            } else {
                console.error("Error en el registro:", errorAxios.message);
            }
        } else {
            console.error("Error inesperado durante el registro:", error);
        }
    }
}
