import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { FormsyDate,
         FormsySelect,
         FormsyText,
         FormsyTime,
         FormsyToggle } from 'formsy-material-ui/lib'

import { RaisedButton,
         MenuItem     } from 'material-ui'


const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL"
  }

  const style = {
      referralOptions :{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
      },
      uploadButton :{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      },
      card :{
          marginBottom : 15
      },
      cardActions :{
          textAlign: 'right'
      },
      paperStyle: {
      //   width: 300,
        margin: 'auto',
        padding: 20,
      },
      switchStyle: {
        marginBottom: 16,
      },
      submitStyle: {
        marginTop: 32,
      },
      chip: {
          margin: 4,
      },
      wrapper: {
          display: 'flex',
          flexWrap: 'wrap',
    },
  }

class ReferralForm extends Component {
  constructor(props) {
      super(props)
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)
      this.submitForm = this.submitForm.bind(this)
      this.notifyFormError = this.notifyFormError.bind(this)

      this.state = {
          canSubmit: true
      }
  }

  disableButton = () => {
      this.setState({canSubmit: false})
  }

  enableButton = () => {
      this.setState({canSubmit: true})
  }

  submitForm = (data) => {
      alert(JSON.stringify(data,null,4))
  }

  notifyFormError = (data) => {
      console.error('Form error:', data)
  }



  render(){
      return(

        <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
        >
        <div style={style.referralOptions}>
            <RaisedButton label="Edit details" primary={true} style={style.uploadButton} />
            <FormsySelect
                name="referralStatus"
                floatingLabelText="Status"
            >
                <MenuItem value={'accepted'} primaryText="Accepted" />
                <MenuItem value={'assigned'} primaryText="Assigned" />
                <MenuItem value={'declined'} primaryText="Declined" />
                <MenuItem value={'withdrawn'} primaryText="Withdrawn" />
                <MenuItem value={'rejected'} primaryText="Rejected" />
                <MenuItem value={'completed'} primaryText="Completed" />
                <MenuItem value={'noShow'} primaryText="No show" />
            </FormsySelect>
        </div>

        {/* patient data form below */}
        <h1>Patient Data</h1>
        <FormsyText
            name="patientSurname"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Surname"
            floatingLabelText="Surname"
        />

        <FormsyText
            name="patientgivenName"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Given name"
            floatingLabelText="Given name"
        />

        <FormsySelect
                name="patientGender"
                floatingLabelText="Gender"
        >
                <MenuItem value={'M'} primaryText="Male" />
                <MenuItem value={'F'} primaryText="Female" />
        </FormsySelect>



        <FormsyText
            name="patientAddress"
            validations="matchRegexp"
            validationError={errorMessages.wordsError}
            hintText="Address"
            floatingLabelText="Address"
        />

        <FormsyText
            name="patientPostcode"
            validations="isInt"
            validationError={errorMessages.wordsError}
            hintText="Postcode"
            floatingLabelText="Postcode"
        />

        <FormsyDate
            name="patientDateOfBirth"
            floatingLabelText="Date of birth"
        />

        <FormsyText
            name="patientMedicare"
            validations="isAlphanumeric"
            validationError={errorMessages.wordsError}
            hintText="Medicare number"
            floatingLabelText="Medicare number"
        />

        <FormsyText
            name="patientContactNumber"
            validations="isInt"
            validationError={errorMessages.wordsError}
            hintText="Contact number"
            floatingLabelText="Contact number"
        />

        {/* doctor data form below */}
        <h1>Doctor Data</h1>
        <FormsyText
            name="doctorSurname"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Surname"
            floatingLabelText="Surname"
        />

        <FormsyText
            name="doctorGivenName"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Given name"
            floatingLabelText="Give name"
        />

        <FormsyText
            name="doctorClinic"
            validations="isWords"
            validationError={errorMessages.wordsError}
            hintText="Clinic"
            floatingLabelText="Clinic"
        />

        <FormsyText
            name="doctorAddress"
            validations="isAlphanumeric"
            validationError={errorMessages.wordsError}
            hintText="Address"
            floatingLabelText="Address"
        />

        <FormsyText
            name="doctorPostcode"
            validations="isInt"
            validationError={errorMessages.wordsError}
            hintText="Postcode"
            floatingLabelText="Postcode"
            // defaultValue={this.props.referral.doctorPostcode}
        />

        <FormsyText
            name="doctorContactNumber"
            validations="isInt"
            validationError={errorMessages.wordsError}
            hintText="Contact number"
            floatingLabelText="Contact number"
            // defaultValue={this.props.referral.doctorContactNumber}
        />

        {/* referral form below */}
        <h1>Referral Details</h1>
        <FormsyText
            name="referralReasonForReferral"
            validations="isWords"
            validationError={errorMessages.wordsError}
            hintText="Reason for referral"
            floatingLabelText="Reason for referral"
            // defaultValue={this.props.referral.referralReasonForReferral}
        />

        <FormsySelect
            name="referralRequestedService"
            floatingLabelText="Requested service"
            // value={this.props.referral.referralRequestedService}
        >
            <MenuItem value={'mentalHealthAssessment'} primaryText="Mental Health Assessment" />
            <MenuItem value={'medicationReview'} primaryText="Medication Review" />
            <MenuItem value={'dianogsticClarification'} primaryText="Diagnostic Clarifiction" />
            <MenuItem value={'assessmentForManagementOfBPSD'} primaryText="Assessment for Management of BPSD" />
        </FormsySelect>

        <FormsyToggle
            name="referralUrgent"
            label="Urgent"
            style={style.switchStyle}
            // defaultToggled={this.props.referral.referralUrgent}
        />
        <div style={style.uploadButton}>
            <RaisedButton label="Upload" primary={true} style={style.uploadButton} />
            <p>Upload additional information (Limited to one PDF file)</p>
        </div>

         {/* triage below */}
        <h1>Triage</h1>
        <FormsySelect
            name="referralRuralCode"
            floatingLabelText="Rural code"
        >
            <MenuItem value={'RA1MajorCities'} primaryText="RA1 MajorCities" />
            <MenuItem value={'RA2InnerRegional'} primaryText="RA2 Inner Regional" />
            <MenuItem value={'RA3OuterRegional'} primaryText="RA3 Outer Regional" />
            <MenuItem value={'RA4Remote'} primaryText="RA4 Remote" />
            <MenuItem value={'RA5VeryRemote'} primaryText="RA5 Very Remote" />
        </FormsySelect>

        <FormsyDate
            name="referralAppointmentDate"
            floatingLabelText="Appointment date"
        />
        <FormsyTime
            name="referralAppointmentTime"
            floatingLabelText="Appointment time"
        />

        

        <p>Last Date reviewed (placeholder)</p>

        <RaisedButton 
            label="Update" 
            primary={true} 
            style={style.uploadButton}
            type="submit"
            onClick={this.submitForm}
        />

        </Formsy.Form>


      )
  }
}


export default ReferralForm