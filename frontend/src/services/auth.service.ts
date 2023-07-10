import { IAuth } from "../interfaces/auth.interface";
import { IRes } from "../types/axiosRes.type";
import { IUser } from "../interfaces/user.interface";
import { axiosService } from "./axios.service";
import { AxiosResponse } from "axios";
import { ITokens } from "../interfaces/tokens.interface";
import { gql } from "@apollo/client";

class AuthService {
  private readonly accessKey = 'access'
  private readonly refreshKey = 'refresh'

  async register(user: IAuth): Promise<IRes<IUser>> {
    const REGISTER_MUTATION = gql`
      mutation register($user: IUser) {
        register(user: $user) {
          id
          email
          role
        }
      }
    `;

    const response = await axiosService.post('/graphql', {
      query: REGISTER_MUTATION,
      variables: { user },
    });
    return response.data;
  }

  async login(admin: IAuth): Promise<void> {
    const LOGIN_MUTATION = gql`
      mutation login($user: IAuth) {
        login(user: $user) {
          id
          email
          role
        }
      }
    `;

    const response: AxiosResponse<{ data: { login: ITokens } }> = await axiosService.post('/graphql', {
      query: LOGIN_MUTATION,
      variables: { admin },
    });

    const { data } = response.data;
    if (data && data.login) {
      this.setTokens(data.login);
    }
  }

  private setTokens({ access, refresh }: ITokens): void {
    localStorage.setItem(this.accessKey, access);
    localStorage.setItem(this.refreshKey, refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessKey);
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshKey);
  }

  deleteTokens(): void {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }
}

export const authService = new AuthService()
