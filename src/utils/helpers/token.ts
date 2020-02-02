import jwt from 'jsonwebtoken';
import { convertFromEpoch } from './epoch';
import { fetch } from '../fetch';
import Cookies from 'js-cookie';
import { AuthState } from '../../store/auth';

interface TokenDecoded {
  iss: string;
  aud: string;
  auth_time: number;
  email: string;
  email_verified: boolean;
  exp: number;
  firebase: string[];
  iat: number;
  sub: string;
  user_id: string;
}

interface AuthRefreshTokenParams {
  grantType: string;
  refreshToken: string;
}

interface AuthRefreshTokenApiResponse {
  access_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
  error: [] | null;
}

const urlRefreshToken = `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_API_KEY}`;

export const apiRefreshToken = async (
  params: AuthRefreshTokenParams
): Promise<AuthRefreshTokenApiResponse> => {
  console.log('Params', params);
  return fetch.post(urlRefreshToken, params);
};

export const isTokenExpired = (token: string): boolean => {
  const alg = 'RS256';
  const key =
    '-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIM2P+gBBaKvEwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMTkx\nMTA0MjEyMTAyWhcNMTkxMTIxMDkzNjAyWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAKoru2TaNW5xb6AR6UX3im9p8i1MNr/guzAv78EL36UFWwSr\n8gITxC1h8SA5GPpHOHXRo/lzxwyiroIFrIAJnuW6mdsAiNE/OokDmWWmuU5Gtafr\n19lMUlFAKMlhbTwppM5/4g0IbfJe1s3jv897H/aa+AHY9JAEMFayq7mXNk1F0LHR\n5QYn3czFsjmhxtT4cIzw5BiVxWXvGFcXZt5j1UjX/7GHo+7kFBQkk6g6RP1fsuOQ\naBdeZ9grRIo5fho9kQpWvRbSPiOtXGBNB+JSdgCYxrMJ73otyZyDyrJlBAHVYNDK\nTg1Vesv9yag3tDv+ZTkazmdmc9AxSQ+b3WXs6X8CAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAHW3pi4njPkzDOauaBJwdSBsurXnKqim3o/TNLwbNql8\nBU6Z0qY7yfnPDQfpWvIcEChpFcoOlPUo8IqMSyDh4q0we0Y7B/kKoBdiLCSltKHH\n8/IvP4C/9l6Z5mOsO+9osx2Y4xiJBVDdxuCgcWK0q5eOO3rtdf+ZYfVwHPo9wW8o\nYrr7lifyBlIAAoQHAgz3PnmuxZGjmOwVvsitKCRhl0bzt98U0qRbKYWDoVARkDeb\nd6kTImHKl/G0ieFO4ClDbDwBkBcyMfqv8Bpfx9D4P9X01mRufAzgfVStYFKxQKCL\nuO2CDuKVlI/YWr33gXe3a6k9h47gOXa3G0wGx8U+eDc=\n-----END CERTIFICATE-----\n';

  const verifyOptions = {
    algorithms: [alg]
  };

  if (token) {
    try {
      const decoded: TokenDecoded = jwt.verify(
        token,
        key,
        verifyOptions
      ) as TokenDecoded;

      console.log('Token Decoded', decoded);

      if (decoded) {
        const authTime = decoded.auth_time;
        console.log('Authorization Time', convertFromEpoch(authTime));
        const exp = decoded.exp;
        console.log('Expiration Time', convertFromEpoch(exp));
        const iat = decoded.iat;
        console.log('Issued At Time', convertFromEpoch(iat));

        // 5 minutes from now
        const minThreshold = 59;
        const msThreshold = minThreshold * 60 * 1000;
        const dateNow = Date.now();
        const dateThreshold = new Date(dateNow + msThreshold);

        const refreshThreshold = Number(dateThreshold) / 1000;
        console.log('Threshold Time', convertFromEpoch(refreshThreshold));

        if (refreshThreshold < exp) {
          return false;
        }
      }
    } catch (error) {
      console.log('Token error on decoding', error);
    }
  }

  return true;
};

