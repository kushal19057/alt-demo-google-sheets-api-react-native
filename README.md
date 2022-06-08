# alt-demo-google-sheets-api-react-native
Demo app prepared using react native to show interacting with google sheets api

## About the app
- The app offers 2 functionalities :
  - Get an existing record from the google sheet
  - Add a new record to the google sheet

![ss app home screen](./assets/image3.png)


- The google sheet stores information of students (id, name, score). The user enters id in the text box. The app fetches details for user id 1 from google sheets and shows it to user.


![google sheet ss](./assets/google-sheet.png)

### Get an existing record from the google sheet

- Input : id of user
- Output : id, name, score of user

A demo can be seen in the gif below. The left part shows google sheets webpage and the right part shows android screen.
The user enters id in the text box and clicks on submit button. The app fetches details from google sheet and shows details to user.

![get demo gif](./assets/get.gif)

### Add a new record to the google sheet.

- Input : id, name, score of new user
- Output : None

A demo can be seen in the gif below. The left part shows google sheets webpage and the right part shows android screen.
The user enters id, name and score of new user. The app sends this data to google sheets and appends the records in a new row.

![post demo gif](./assets/post.gif)

## Architecture
![architecture of google sheets api demo app](./assets/image1.drawio.png)
- I created a service using Fast API and deployed it on a cloud server ([link to service](https://9hvbm2.deta.dev/docs)).

![api endpoints of fast api](./assets/image2.png)

- The

## Acknowledgements
- Android screen capture and control done using scrcpy.
- Desktop screen capture done using obs studio.
