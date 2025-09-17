import './signin.css';
import axios from 'axios';

const SignIn = () => {

  const handleUserLogin = (e) => {
      
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
          
      axios.post('http://localhost:8000/login', data)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('user', res.data.email);
            window.location.href = '/';
          } else {
            alert('User registration failed');
          }
        })
        .catch(err => {
          console.log(err);
        });
  };

  return (
    <>
      <div className="bg">
        <div className="sign-in">
          <div className="sign-in-form">
            <br />
            <h1>Sign In</h1>
            <form onSubmit={handleUserLogin}>
              <input type="text" name="email" placeholder="Email" required />
              <br />
              <input type="password" name="password" placeholder="Password" required />
              <br />
              <input type="submit" value="Sign In" className="sign-in-btn" />
            </form>
            <p className='register-text'>
              Don&apos;t have an account?
              <br />
              <a href="/register">Register</a> from here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;