import React from 'react';

import {PropsFromState, PropsFromDispatch} from './';

import {
  Card, CardImg, CardText, Button,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

type IProps = PropsFromState & PropsFromDispatch;

const jwt = require('jsonwebtoken');

class User extends React.Component<IProps> {

  componentDidMount() {
    this.fetchUserData();
  }

  verifyToken = (): void => {
    const alg = 'RS256';
    const kid ={
      "5dce7e41add121b86ed404b84da75739467ed2bc": "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIICcg5jVpeDlswDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMTkx\nMDI3MjEyMTAyWhcNMTkxMTEzMDkzNjAyWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBALItJH6zbh7ZEYi0giBwxMCCa9lfpQSxZWCm0nQlCeSNFvfp\nKBSdd+uVIWzZ/FWOlC7KU/2XfbR85yPAHaqb3coarsv3AHiEoltBol/xHceVeHUk\nqwiMvPlYYOD8/MGrIwJjl74Mg22XZbWf0DQAXE9pK5I23/cuaqrRXA+etoVPOH5+\nqqV3LsHuPw8KPTeDfagAV5VtLMPqbExZhMobDsyexqGCs09hpb9TqHU9smH8Bfss\nw2tqb4qLKEmI+xBXTLci2JdnG+7/0/2uOW2/d08M5sU7m5VoVK4dTLKyWP1ESALh\ni6nDSPoj1Pxxausx9PGi6CgBvFz8qmST45EJm0cCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBACUOZJlsf2GfI+4+c9eLEA06I7b2uu86Mpow24TnxlCn\nmhBusE2KOGMaUrUed2/fi4t4Io6T0T6r9u/+alox9u3HkLzAWSPVAMTIt7UivHGI\nxtw1VoDImXeafqpfuKjezhIrhpjeNWiU9Q9VaDWzX0qIG2Rf0BGvW7hhEOGQWxO/\nYGBL7+2/f0c8Mv/yjMHqfXHWzZdnwsJiR8sP3n8YEChccbIVqV+EJYTpxnuT9x4E\nFf8vjcCF7FCly4/JIkGu90jNwc6LCr9GBpEbROreo6hI3EK0x8KJR806xRJXU6nR\nveVGAvxcAoiU0pw2GUS1kYFlVNKNhcwjy8fObrAvXUw=\n-----END CERTIFICATE-----\n",
      "250811cdc609d90f98151191b2bc9bd0ceb9c004": "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIM2P+gBBaKvEwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMTkx\nMTA0MjEyMTAyWhcNMTkxMTIxMDkzNjAyWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAKoru2TaNW5xb6AR6UX3im9p8i1MNr/guzAv78EL36UFWwSr\n8gITxC1h8SA5GPpHOHXRo/lzxwyiroIFrIAJnuW6mdsAiNE/OokDmWWmuU5Gtafr\n19lMUlFAKMlhbTwppM5/4g0IbfJe1s3jv897H/aa+AHY9JAEMFayq7mXNk1F0LHR\n5QYn3czFsjmhxtT4cIzw5BiVxWXvGFcXZt5j1UjX/7GHo+7kFBQkk6g6RP1fsuOQ\naBdeZ9grRIo5fho9kQpWvRbSPiOtXGBNB+JSdgCYxrMJ73otyZyDyrJlBAHVYNDK\nTg1Vesv9yag3tDv+ZTkazmdmc9AxSQ+b3WXs6X8CAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAHW3pi4njPkzDOauaBJwdSBsurXnKqim3o/TNLwbNql8\nBU6Z0qY7yfnPDQfpWvIcEChpFcoOlPUo8IqMSyDh4q0we0Y7B/kKoBdiLCSltKHH\n8/IvP4C/9l6Z5mOsO+9osx2Y4xiJBVDdxuCgcWK0q5eOO3rtdf+ZYfVwHPo9wW8o\nYrr7lifyBlIAAoQHAgz3PnmuxZGjmOwVvsitKCRhl0bzt98U0qRbKYWDoVARkDeb\nd6kTImHKl/G0ieFO4ClDbDwBkBcyMfqv8Bpfx9D4P9X01mRufAzgfVStYFKxQKCL\nuO2CDuKVlI/YWr33gXe3a6k9h47gOXa3G0wGx8U+eDc=\n-----END CERTIFICATE-----\n"
    };
    const key =
      "5dce7e41add121b86ed404b84da75739467ed2bc";
      const key2 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIICcg5jVpeDlswDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMTkx\nMDI3MjEyMTAyWhcNMTkxMTEzMDkzNjAyWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBALItJH6zbh7ZEYi0giBwxMCCa9lfpQSxZWCm0nQlCeSNFvfp\nKBSdd+uVIWzZ/FWOlC7KU/2XfbR85yPAHaqb3coarsv3AHiEoltBol/xHceVeHUk\nqwiMvPlYYOD8/MGrIwJjl74Mg22XZbWf0DQAXE9pK5I23/cuaqrRXA+etoVPOH5+\nqqV3LsHuPw8KPTeDfagAV5VtLMPqbExZhMobDsyexqGCs09hpb9TqHU9smH8Bfss\nw2tqb4qLKEmI+xBXTLci2JdnG+7/0/2uOW2/d08M5sU7m5VoVK4dTLKyWP1ESALh\ni6nDSPoj1Pxxausx9PGi6CgBvFz8qmST45EJm0cCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBACUOZJlsf2GfI+4+c9eLEA06I7b2uu86Mpow24TnxlCn\nmhBusE2KOGMaUrUed2/fi4t4Io6T0T6r9u/+alox9u3HkLzAWSPVAMTIt7UivHGI\nxtw1VoDImXeafqpfuKjezhIrhpjeNWiU9Q9VaDWzX0qIG2Rf0BGvW7hhEOGQWxO/\nYGBL7+2/f0c8Mv/yjMHqfXHWzZdnwsJiR8sP3n8YEChccbIVqV+EJYTpxnuT9x4E\nFf8vjcCF7FCly4/JIkGu90jNwc6LCr9GBpEbROreo6hI3EK0x8KJR806xRJXU6nR\nveVGAvxcAoiU0pw2GUS1kYFlVNKNhcwjy8fObrAvXUw=\n-----END CERTIFICATE-----\n";
      const key3 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIM2P+gBBaKvEwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMTkx\nMTA0MjEyMTAyWhcNMTkxMTIxMDkzNjAyWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAKoru2TaNW5xb6AR6UX3im9p8i1MNr/guzAv78EL36UFWwSr\n8gITxC1h8SA5GPpHOHXRo/lzxwyiroIFrIAJnuW6mdsAiNE/OokDmWWmuU5Gtafr\n19lMUlFAKMlhbTwppM5/4g0IbfJe1s3jv897H/aa+AHY9JAEMFayq7mXNk1F0LHR\n5QYn3czFsjmhxtT4cIzw5BiVxWXvGFcXZt5j1UjX/7GHo+7kFBQkk6g6RP1fsuOQ\naBdeZ9grRIo5fho9kQpWvRbSPiOtXGBNB+JSdgCYxrMJ73otyZyDyrJlBAHVYNDK\nTg1Vesv9yag3tDv+ZTkazmdmc9AxSQ+b3WXs6X8CAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAHW3pi4njPkzDOauaBJwdSBsurXnKqim3o/TNLwbNql8\nBU6Z0qY7yfnPDQfpWvIcEChpFcoOlPUo8IqMSyDh4q0we0Y7B/kKoBdiLCSltKHH\n8/IvP4C/9l6Z5mOsO+9osx2Y4xiJBVDdxuCgcWK0q5eOO3rtdf+ZYfVwHPo9wW8o\nYrr7lifyBlIAAoQHAgz3PnmuxZGjmOwVvsitKCRhl0bzt98U0qRbKYWDoVARkDeb\nd6kTImHKl/G0ieFO4ClDbDwBkBcyMfqv8Bpfx9D4P9X01mRufAzgfVStYFKxQKCL\nuO2CDuKVlI/YWr33gXe3a6k9h47gOXa3G0wGx8U+eDc=\n-----END CERTIFICATE-----\n";
    const { token } = this.props.auth;
    var verifyOptions = {
      algorithms: [alg]
     };
     
    
    if (token){
      let decoded =jwt.verify(token,key3,verifyOptions);
      console.log(decoded);
    }

  }

  fetchUserData = (): void => {
    const { auth } = this.props;
    const { token } = auth;

    if (token) {
      this.props.actionGetUserData({idToken:token});  
    }    
  }

  render(): JSX.Element {   
    const { user } = this.props;
    console.log("Render", this.props);
    return (
      <div style={{width:'300px'}}>
        <Card>
          <CardImg top width="100%" src={user.photoUrl ? user.photoUrl : 'https://via.placeholder.com/150.png?text=Avatar'} alt="User Img" />
          <CardTitle>{user.displayName}</CardTitle>
          <CardSubtitle>{user.email}</CardSubtitle>
          <CardText><b>ID:</b>{user.localId}</CardText>
          <Button onClick={this.verifyToken} color="primary">Verify Token</Button>
        </Card>
      </div>      
    );
  }
}

export default User;