import React from "react"

import FirstNameInput from "../../../common/Form/FirstNameInput"
import LastNameInput from "../../../common/Form/LastNameInput"
import CellPhoneInput from "../../../common/Form/CellPhoneInput"
import UserNameInput from "../../../common/Form/UserNameInput"
import EmailInput from "../../../common/Form/EmailInput"
import PasswordInput from "../../../common/Form/PasswordInput"
import RePasswordInput from "../../../common/Form/RePasswordInput"
import GenderInput from "../../../common/Form/GenderInput"
import BirthdayInputs from "../../../common/Form/BirthDayInputs"
import LocationInputs from "../../../common/Form/LocationInputs"
import MainInstrumentsInputs from "../../../common/Form/MainInstrumentsInputs"
import SecondInstrumentsInputs from "../../../common/Form/SecondInstrumentsInputs"
import HowToKnowUsInput from "../../../common/Form/HowToKnowUsInput"
import ReferenceInput from "../../../common/Form/ReferenceInput"

type properties = {
  errors: any
  touched: any
  setFieldValue: any
  values: any
}

const FastSubscriptionFormFields: React.FC<properties> = (props) => {
  const BithdayError = {
    year: props.errors.yearOfBirthDate,
    month: props.errors.monthOfBirthDate,
    day: props.errors.dayOfBirthDate,
  }
  const BithdayTouched = {
    year: props.touched.yearOfBirthDate,
    month: props.touched.monthOfBirthDate,
    day: props.touched.dayOfBirthDate,
  }

  const LocationError = {
    locationId: props.errors.locationId,
    locationId2: props.errors.locationId2,
    locationId3: props.errors.locationId3,
    locationTitle: props.errors.locationTitle,
  }
  const LocationTouched = {
    locationId: props.touched.locationId,
    locationId2: props.touched.locationId2,
    locationId3: props.touched.locationId3,
    locationTitle: props.touched.locationTitle,
  }

  const MainInstrumentError = {
    mainInstrument: props.errors.mainInstrument,
    mainLevel: props.errors.mainLevel,
    mainStartingDate: props.errors.mainStartingDate,
    mainStyle1: props.errors.mainStyle1,
    mainStyle2: props.errors.mainStyle2,
    mainStyle3: props.errors.mainStyle3,
  }

  const MainInstrumentTouched = {
    mainInstrument: props.touched.mainInstrument,
    mainLevel: props.touched.mainLevel,
    mainStartingDate: props.touched.mainStartingDate,
    mainStyle1: props.touched.mainStyle1,
    mainStyle2: props.touched.mainStyle2,
    mainStyle3: props.touched.mainStyle3,
  }

  const SecondInstrumentError = {
    secondInstrument: props.errors.secondInstrument,
    secondLevel: props.errors.secondLevel,
    secondStartingDate: props.errors.secondStartingDate,
    secondStyle1: props.errors.secondStyle1,
    secondStyle2: props.errors.secondStyle2,
    secondStyle3: props.errors.secondStyle3,
  }

  const SecondInstrumentTouched = {
    secondInstrument: props.touched.secondInstrument,
    secondLevel: props.touched.secondLevel,
    secondStartingDate: props.touched.secondStartingDate,
    secondStyle1: props.touched.secondStyle1,
    secondStyle2: props.touched.secondStyle2,
    secondStyle3: props.touched.secondStyle3,
  }

  return (
    <React.Fragment>
      <FirstNameInput
        errors={props.errors.firstName}
        touched={props.touched.firstName}
      />
      <LastNameInput
        errors={props.errors.lastName}
        touched={props.touched.lastName}
      />
      <CellPhoneInput
        errors={props.errors.cellphone}
        touched={props.touched.cellphone}
      />
      <UserNameInput
        errors={props.errors.username}
        touched={props.touched.username}
      />
      <EmailInput errors={props.errors.email} touched={props.touched.email} />
      <PasswordInput
        errors={props.errors.password}
        touched={props.touched.password}
      />
      <RePasswordInput
        errors={props.errors.repassword}
        touched={props.touched.repassword}
      />
      <GenderInput
        errors={props.errors.gender}
        touched={props.touched.gender}
        setValue={props.setFieldValue}
      />
      <BirthdayInputs
        errors={BithdayError}
        touched={BithdayTouched}
        values={props.values}
        setValue={props.setFieldValue}
      />
      <LocationInputs
        errors={LocationError}
        touched={LocationTouched}
        values={props.values}
        setValue={props.setFieldValue}
      />
      <MainInstrumentsInputs
        errors={MainInstrumentError}
        touched={MainInstrumentTouched}
        setValue={props.setFieldValue}
      />
      <SecondInstrumentsInputs
        errors={SecondInstrumentError}
        touched={SecondInstrumentTouched}
        setValue={props.setFieldValue}
      />
      <HowToKnowUsInput
        errors={props.errors.howKnowingUs}
        touched={props.touched.howKnowingUs}
      />
      <ReferenceInput
        errors={props.errors.reference}
        touched={props.touched.reference}
      />
    </React.Fragment>
  )
}

export default FastSubscriptionFormFields
