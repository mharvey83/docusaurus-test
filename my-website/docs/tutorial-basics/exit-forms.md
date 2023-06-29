---
sidebar_position: 5
---

# Exit Forms

```
@Override

protected void onActivityResult(int requestCode, int resultCode, Intent data) {

if (resultCode != Activity.RESULT\_OK) {

//... code to handle error

} else {

//... code to check requestCode and resultCode

// extract the boolean flag to indicating if the flow completed

Boolean biometricsCompleted = data.getBooleanExtra(Constants.SIMPRINTS\_BIOMETRICS\_COMPLETE\_CHECK);

// check if the flow completed successfully

if (biometricsCompleted) {

//...code to handle success scenario

} else {

// check if this was actually due to an exit form

if (data.hasExtra(Constants.SIMPRINTS\_REFUSAL\_FORM)) {

// extract the RefusalForm value

RefusalForm refusalForm = data.getParcelableExtra(Constants.SIMPRINTS\_REFUSAL\_FORM);

// get access to the 'reason' and 'extra' values

String reason = refusalForm.getReason();

tring extra = refusalForm.getExtra();

} else {

//... code to handle alternate error scenario

}

}

}

}
```

These are the reasons that Simprints ID can return:



REFUSED_RELIGION  -  returned when the biometric capture was refused due to religious concerns

REFUSED_DATA_CONCERNS  - returned when the biometric capture was refused due to personal data concerns

REFUSED_PERMISSION -  returned when the beneficiary refuses permissions for biometric capture

SCANNER_NOT_WORKING - returned when the fingerprint scanner is not working

APP_NOT_WORKING - returned when SID app stops working during biometric capture

REFUSED_NOT_PRESENT -  returned when the beneficiary to be captured is not present themselves

REFUSED_YOUNG -  returned when the beneficiary to be captured is too young

OTHER  -  returned when some other reason for refusal, has been provided.
