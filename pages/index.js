import { AppBar } from 'components/appbar';
import { GoogleProvider } from 'components/authentication/providers';
import { Title } from 'ui/title';

function index() {
  return (
    <>
      <AppBar />
      <Title>Account Login</Title>
      <GoogleProvider>With Google</GoogleProvider>
    </>
  );
}

export default index;
