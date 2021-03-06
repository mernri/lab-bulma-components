import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

import "bulma/css/bulma.css";


export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField 
            label="Name" 
            type="text" 
            placeholder="e.g Alex Smith" 
        />

        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField
          label="Password"
          type="password"
        />
        <CoolButton isSmall isSuccess className="is-rounded my-class">Submit</CoolButton>

      </div>
    );
  }
}
