import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { register } from 'redux/auth/operations';
import { LoadButton } from '../LoadButton/LoadButton';
import css from './RegisterForm.module.css';


export const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };


  return (    
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className={css.form}
      >
        <div>
          <TextField
            id="standard-textarea"
            label="Username"
            placeholder="Enter username"
            multiline
            variant="standard"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"            
            title="Name may contain only letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <TextField
            id="standard-textarea"
            label="Email"
            placeholder="Enter email"
            multiline
            variant="standard"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Enter a valid email address. For example, ivanov@gmail.com"
            required
          />
        </div>
        <div>
          <TextField
            id="standard-textarea"
            label="Password"
            placeholder="Enter password"
            multiline
            variant="standard"
            type="password"
            name="password"
            pattern="^[A-Za-zА-Яа-я0-9,\.\(\)\-]{7,}$"
            title="Password must contain at least 7 characters"
            required
          />
        </div>
        <div className={css.button__wrapper}>  
          <LoadButton>Register</LoadButton>
        </div>
    </Box>
  );
};

