import { GoogleProvider } from 'components/auth/providers/google';
function index() {
  return (
    <div>
      <header>
        <h1>To Do List App</h1>
        <GoogleProvider label="Sign Up With Google" />
      </header>
    </div>
  );
}

export default index;
