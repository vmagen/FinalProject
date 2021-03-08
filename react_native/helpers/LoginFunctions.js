import helpers from './helperFunctions';

const loginFunctions = {
    isUserExists: async function (email) {
        await fetch(helpers.getApi() + 'user/email?email=' + email,
        {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
          })
        })
        .then(res => {
          if (res.ok) {
              console.log("RES Login", res.json())
           return res.json();
          }
          else {
           return null;
          }
        })
    },
    

}

export default loginFunctions;