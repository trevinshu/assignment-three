import { AppBar } from 'components/appbar';
import { GoogleProvider } from 'components/authentication/providers';
import { Title } from 'ui/title';
import { Spacer } from 'ui/spacers';
import { EmailAndPassword } from 'components/authentication/login';
import { HighLight, Legal } from 'ui/legal';
import { PageLayout, PageHeader, PageBody, PageFooter } from 'layouts/loginpage';
function index() {
  return (
    <>
      <AppBar />
      <PageLayout>
        <PageHeader>
          <Title>Account Login</Title>
        </PageHeader>
        <PageBody>
          <GoogleProvider>With Google</GoogleProvider>
          <Spacer>OR</Spacer>
          <EmailAndPassword />
        </PageBody>
        <PageFooter>
          <Legal>
            Legal Stuff <HighLight>Terms and Conditions</HighLight>
          </Legal>
        </PageFooter>
      </PageLayout>
    </>
  );
}

export default index;
