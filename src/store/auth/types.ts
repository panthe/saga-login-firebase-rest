export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly token: string | null;
  readonly refreshToken: string | null;
  readonly expiresIn: number;
  readonly errors: string[] | null;
}