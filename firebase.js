import axios from 'axios';

export function storeExpense(RegistrationScreen) {
  axios.post(
    'https://tirunelveli-police-default-rtdb.firebaseio.com//expenses.json',
    RegistrationScreen
  );
}