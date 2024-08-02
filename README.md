## Installation

1. ##### Clone the repo
   ```sh
   $ git clone https://github.com/JavierCisneros/sensedia_challengue.git
   ```
2. ##### Navigate to folder and install NPM packages

   ```sh
   $ npm i
   ```

3. ##### Deploy Back-End

   To ensure the project works correctly, you need to deploy the Sensedia Candidate Challenge API on a Linux server. Follow the instructions in the provided documentation [Sensedia API](https://bitbucket.org/sensedia/sensedia-candidate-challenge)

4. ##### Run development server

   ```sh
   $ npm run dev
   ```

5. ##### Change the enviroment variables

   After deploying the Sensedia API and running the Next.js development server, update the `.env` variables for proper functionality.

- **Sensedia API:** This refers to the API you deployed. Change the `SENSEDIA_API_SECRET_URL` to the URL where your server is running (e.g., `http://localhost:8080`).

- **Next.js API:** This is the local API URL for your Next.js project. Set `NEXT_PUBLIC_NEXT_API` to `http://localhost:3000/api/`
  Example `.env` configuration:

  ```
  SENSEDIA_API_SECRET_URL=http://localhost:8080/api/v1
  NEXT_PUBLIC_NEXT_API= http://localhost:3000/api/
  ```

## Walk through the application

1. #### Home page

   The home page provides a simple interface where you can choose to register a new user or view the users table to find all registered users. A breadcrumb navigation is also available to help you navigate the website.
![Captura de pantalla 2024-08-02 115307](https://github.com/user-attachments/assets/9ebdc331-cdd2-465a-bc4e-e76b000f1ef0)

2. #### Users table

   This page displays all users retrieved from the Sensedia API. You can search for users by name, ID, email, or other fields using the search bar. To delete a user, click the trash can icon on the right of the user row and confirm the action to prevent accidental data loss. Clicking on a user row will take you to the user's profile page. You can also navigate through the table using the paginator at the bottom.
![Captura de pantalla 2024-08-02 115002](https://github.com/user-attachments/assets/e7827232-4af2-46f1-926e-6615a24f169d)
![Captura de pantalla 2024-08-02 115013](https://github.com/user-attachments/assets/6cef83be-3a3d-4102-bed6-8fdb0dd37e6a)

3. #### Registry form

   Use this page to add new users to the database by filling in the required fields. If any required fields are missing, you will be prompted to correct them. After submission, you will be redirected to the users table, where the newly added user will appear at the end.
![Captura de pantalla 2024-08-02 115109](https://github.com/user-attachments/assets/6796f88f-fcbe-4af9-bf40-30135c9346c7)
![Captura de pantalla 2024-08-02 115130](https://github.com/user-attachments/assets/7e45dac6-0190-4047-9b31-de5f4a701d30)

4. #### Users page

   Clicking on a user will take you to their profile page, which displays basic information about the user.
![image](https://github.com/user-attachments/assets/da75aa1f-922c-4459-899d-ed42e6605b0e)
5. #### Not Found
   A not found page will display when the user get the route wrong
![Captura de pantalla 2024-08-02 115540](https://github.com/user-attachments/assets/f302d5a0-ae15-4bc3-bcc2-b6589f5d7449)

##Mobile compatibility
![Screenshot_20240802-122623](https://github.com/user-attachments/assets/15a86fd6-ccf9-4659-8e43-2aabf3851e1f)
![Screenshot_20240802-122553](https://github.com/user-attachments/assets/6b909d70-a972-4f3d-8091-1210df7b05bd)
![Screenshot_20240802-122516](https://github.com/user-attachments/assets/c8a825ac-639b-4b52-9f4f-f52dbf8da155)
![Screenshot_20240802-122607](https://github.com/user-attachments/assets/ca572a39-c3c1-412d-aa69-53e44b3ba1d2)
![Screenshot_20240802-122612](https://github.com/user-attachments/assets/a862554f-8aee-43ec-a7df-39efa6642673)

## Contact

Javier Cisneros - [javiercisneros.me](https://JavierCisneros.me) - [fjca185@gmail.com](mailto:fjca185@gmail.com)
