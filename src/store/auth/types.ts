export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly isRefreshingToken: boolean;
  readonly token: string | null;
  readonly refreshToken: string | null;
  readonly expiresIn: string| null;
  readonly errors: string[] | null;
}