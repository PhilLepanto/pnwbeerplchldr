import sendIt from './../apis/EmailJS';
import history from '../history';
//Actions
  /*
  export const sendContactMessage = (firstname,lastname,emailaddress,msg) => {
    return {
      type: 'SEND_CONTACTMESSAGE',
      payload: {
        firstname: firstname,
        lastname: lastname,
        emailaddress: emailaddress,
        message: msg
      }
    };
  };
*/
  export const sendContactMessage = formValues => async dispatch => {
      const mydata = {
        service_id: 'sendgrid',
        template_id:'contact_form',
        user_id: 'user_irwsclNJmDl38yeyz3p0H',
        template_params: formValues
    };

   const response = await sendIt.post('/api/v1.0/email/send',mydata).then(res => history.push('/thanks')).catch(err => history.push('/error'));;
   
  
   /*
   if (response.status === '200') {
    history.push('/thanks');
   } else {
     history.push('/error');
   }
   */
  };