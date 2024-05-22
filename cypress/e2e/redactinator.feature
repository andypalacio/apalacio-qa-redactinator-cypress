Feature: As a Redactor I need to validate that I can access eConsults and its attachments to redact them

Scenario: Successfully mark an attachment as active
Given the user visits my queue page
When the user clicks on the No redaction needed button of a first attachment of the eConsult "ID"

Scenario: Successfully mark the last attachment  of an eConsult as active
Given the user visits my queue page
When the user clicks on the No redaction needed button of a last attachment of the eConsult "ID"
Then the eConsult is removed from the queue

Scenario: Succesfuly redact an attachment
Given the user visits my queue page
And the user clicks on the Redact button of a pending attachment of the eConsult "ID"
And the user is redirected to the redactinator Page
And the user clicks on the " Add Censor" button
And a black box is added to the attachment
When the user clicks on the "Done" Button
Then the user is redirected to the my queue Page

Scenario: Successfully redact an attachment with no censors
Given the user visits my queue page
And the user clicks on the Redact button of a pending attachment of the eConsult "ID"
And the user is redirected to the redactinator Page
When the user clicks on the "Done" Button
Then the user is redirected to the my queue Page

Scenario: Successfully re-redact an attachment
Given the user visits my queue page
And the user clicks on the Redact button of a pending attachment of the eConsult "ID"
And the user is redirected to the redactinator Page
And the user clicks on the " Add Censor" button
And a black box is added to the attachment
And the user clicks on the "Done" Button
And the user is redirected to the my queue Page
When the user clicks on the same attachment
Then the user is redirected to the redactinator Page
And the attachment has the recently added censor
And the user clicks on the " Add Censor" button
And a black box is added to the attachment
And the user clicks on the "Done" Button
And the user is redirected to the my queue Page

Scenario: Successfully redact the last attachment of an eConsult as done
Given the user visits my queue page
And the user clicks on the Redact button of a pending attachment of the eConsult "ID"
And the user is redirected to the redactinator Page
And the user clicks on the " Add Censor" button
And a black box is added to the attachment
When the user clicks on the "Done" Button
Then the user is redirected to the my queue Page
Then the eConsult is removed from the queue