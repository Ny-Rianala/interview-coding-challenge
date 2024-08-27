# coding-challenge
Here is a coding challenge to test a junior developer's skills and see if they are able to tackle challenges that an intermediate dev can handle.

## Instructions:
Developers can use whatever technologies they are familiar with and need to start from scratch.
If you are stuck on running the app, please let us know.
Head to the instructions [here](https://docs.google.com/document/d/1Pstqo1wXu0v-ETa80WxtYkgq3ZzYiZWRV2E8UH12gHQ/edit)

## Frontend
Your frontend code should be written in a folder called `frontend`. Please add a clear instruction on how to run your code.

## Backend
This is a simple backend app to perform CRUD operations on products data.
We have some data added to the local database. You can edit it as you want as it is yours. You just make sure that you leave data there for us to test your app.

### Technologies.
It is a simple backend server written in `Python` and using `Flask`(a lightweight Python web framework).

### How to run the app
1. Navigate to the `backend` folder.

2. There a few ways to install packages but let's use a Virtual Environment for this app (The most recommended way):
    
    A virtual environment allows us to install packages in an isolated environment without affecting the system-wide Python installation:

    1. Create a virtual environment:

        Make sure you have python3 installed on your machine before proceeding:

    ```
        python3 -m venv venv
    ```

    2. Activate the virtual environment:
    
        - On Linux or macOS:

        ```
            source venv/bin/activate
        ```


        - On Windows:

        ```
            venv\Scripts\activate
        ```

    3. Install Flask within the virtual environment:

        ```
            pip install flask
        ```


1. Run `python app.py`
1. Start working on the frontend
