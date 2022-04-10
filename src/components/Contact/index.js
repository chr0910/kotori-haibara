import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { ContactContainer, ContactH1, ContactSubmit, FormWrap, Form } from './ContactElements';
import { TextField, Grid, MenuItem, Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { FiCheckCircle } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));
  const grades = [
    { value: '小学1年' },
    { value: '小学2年' },
    { value: '小学3年' },
    { value: '小学4年' },
    { value: '小学5年' },
    { value: '小学6年' },
    { value: '中学1年' },
    { value: '中学2年' },
    { value: '中学3年' },
    { value: '高校1年' },
    { value: '高校2年' },
    { value: '高校3年' },
  ];
export default function Contact() {
    const classes = useStyles();
    const [grade, setGrade] = React.useState('');
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
        setGrade(event.target.value);
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_japxrbc', 'template_znbxkd4', e.target, 'user_wx5pGqL7cj6I6jerBeoiF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

  return (
    <ContactContainer>
        <ContactH1 />
        <FormWrap>
            <Form className={classes.root} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="お名前" 
                      variant="outlined" 
                      name="name"
                      fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="メールアドレス" 
                      variant="outlined" 
                      name="email"
                      fullWidth
                      required 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="電話番号" 
                      variant="outlined" 
                      name="phone"
                      fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="住所" 
                      variant="outlined" 
                      name="address"
                      fullWidth 
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField 
                      id="outlined-basic" 
                      label="学年" 
                      variant="outlined" 
                      name="grade"
                      fullWidth
                      select
                      value={grade}
                      onChange={handleChange}
                  >
                      {grades.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                          {option.value}
                          </MenuItem>
                      ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                      id="date"
                      label="見学・体験ご希望日"
                      type="date"
                      variant="outlined" 
                      name="date"
                      fullWidth
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                      id="outlined-full-width"
                      label="お問い合わせ"
                      multiline
                      rows={5}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="message"
                  />
                </Grid>
                <ContactSubmit type="submit" value="送信する" onClick={handleClick} />
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert severity="warning" icon={<FiCheckCircle fontSize="inherit" />}>
                    <AlertTitle>Your message successfully sent.</AlertTitle>
                    送信しました。
                  </Alert>
                </Snackbar>
              </Grid>
            </Form>
        </FormWrap>
    </ContactContainer>
  );
}