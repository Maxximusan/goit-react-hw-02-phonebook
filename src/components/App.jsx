import React from 'react'
import { Form } from 'components/Form/Form'

export class App extends React.Component {

state = {
  contacts: [],

}

  dataFormSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form submit={this.dataFormSubmit}/>
      </>
      )
  };
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
};
