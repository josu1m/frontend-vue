import { reactive } from "vue";
import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export const formData = reactive<LoginFormData>({
  email: "",
  password: "",
});

export async function login(): Promise<LoginResponse> {
  try {
    const response: AxiosResponse<any> = await axios.post(
      apiUrl + "/login",
      formData
    );
    console.log("Inicio de sesión exitoso:");

    return {
      success: true,
      token: response.data.token, // Asegúrate de que la API devuelve el token en response.data.token
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<any> = error;
      return {
        success: false,
        error: axiosError.response?.data.message || axiosError.message,
      };
    } else {
      return {
        success: false,
        error: "Error desconocido en el inicio de sesión",
      };
    }
  }
}
