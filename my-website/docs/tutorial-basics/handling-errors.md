---
sidebar_position: 8
---


# Handling Errors

How to Handle Errors

When a biometric flow fails, it can be due to a number of reasons outside an exit form. Those errors appear for the user in the form of coloured screens. So when handling the result from a flow and an error occurs, you can get access to what type of error occurred using the **Constants** class.

Extracting the error:

```
import com.simprints.libsimprints.Constants;

override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {

super.onActivityResult(requestCode, resultCode, data)

// ensure that the result status is OK

if (resultCode != Activity._RESULT\_OK_) {

//...code to extract the error that occurred

// using the Constants class

// for instance, an error due to invalid project id

boolean isProjectIdError = resultCode == Constants.SIMPRINTS\_INVALID\_PROJECT\_ID

} else {

//...code to handle success case

}

}
```

# Data Authentication Errors

Related to configuration data or authentication errors:

SIMPRINTS_VERIFY_GUID_NOT_FOUND_ONLINE -  returned when the **unique id** that was passed, is not found on the server

SIMPRINTS_VERIFY_GUID_NOT_FOUND_OFFLINE -  returned when the **unique id** that was passed, is not found on the device



# Configuration Errors

Related to configuration errors:

SIMPRINTS_INVALID_PROJECT_ID -  returned when an invalid project ID is used

SIMPRINTS_MISSING_PROJECT_ID -  returned when no project ID was passed

SIMPRINTS_DIFFERENT_PROJECT_ID  -  returned when a project ID used, is different from the one used to authenticate the app

SIMPRINTS_INVALID_USER_ID -  returned when an invalid user ID is used

SIMPRINTS_MISSING_USER_ID  -  returned when no user ID is passed

SIMPRINTS_DIFFERENT_USER_ID -  returned when a user ID used is different from the one used to log in

SIMPRINTS_INVALID_MODULE_ID - returned when the module ID doesn't exist

SIMPRINTS_MISSING_MODULE_ID - returned when no module ID is passed

SIMPRINTS_DIFFERENT_MODULE_ID - returned when the module ID is different

SIMPRINTS_INVALID_METADATA -  returned  when the metadata has an invalid format or value

SIMPRINTS_MISSING_VERIFY_GUID - returned when no unique ID is passed, during Verification

SIMPRINTS_INVALID_VERIFY_GUID - returned when an invalid unique ID verify GUID

SIMPRINTS_INVALID_RESULT_FORMAT - returned when the result format is invalid