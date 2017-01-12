import React, { Component } from 'react'

//material-ui components
import { TextField } from 'material-ui/';

class Profile extends Component {
    render(){
        return(
            <div className="border">
                    <p>THIS IS THE PROFILE PAGE</p>
                    <p>
                        <TextField
                            hintText="Type something here"
                            floatingLabelText="This is a text field child from Profile component"
                            fullWidth={true}
                        />
                    </p>
            </div> 
        )
    }
}

export default Profile
