# IPO Web Application & REST API

## Overview

This project involves the development of a web application and REST API that provides IPO-related information to the public. The application displays details like company name, IPO price, status, listing price, listing gain, and current return, among others. The web app is built with a Django backend and a frontend using HTML, CSS, JavaScript, and Bootstrap 5. The goal of the project is to present IPO data efficiently to users and allow them to access downloadable documents like RHP and DRHP PDFs.

## Technologies Used

### Backend:
- **Python (3.12.3)**
- **Django (5.0.6)**
- **Django REST Framework (3.15.1)**
- **PostgreSQL** (for database)
- **Git/GitHub** (for version control)

### Frontend:
- **HTML** for structure
- **CSS** for styling
- **Bootstrap 5** (via CDN) for responsive design
- **JavaScript** (no Node.js)
  
## Project Structure
### Folder Descriptions

- **`app/`**: This is the main Django app folder that contains all application-related files.
  - **`migrations/`**: This folder holds all the database migration files. These are automatically created when running `makemigrations` and `migrate`.
  - **`static/`**: Contains all static assets like CSS, JavaScript, and image files.
    - **`css/`**: Contains all CSS files for styling the frontend.
    - **`js/`**: Contains JavaScript files for client-side behavior.
    - **`images/`**: Stores image files used in the project.
  - **`templates/`**: Contains HTML templates that are rendered by Django views.
    - **`index.html`**: The home page HTML template.
  - **`__init__.py`**: This file marks the directory as a Python package.
  - **`admin.py`**: Contains configuration for the Django admin interface.
  - **`apps.py`**: Defines the app configuration for Django.
  - **`models.py`**: Defines the database models (tables).
  - **`views.py`**: Contains views for rendering HTML templates and handling API requests.
  - **`urls.py`**: Defines URL routing specific to the app.

- **`project/`**: This is the main project folder containing Django settings and deployment configurations.
  - **`settings.py`**: Contains the global settings and configuration for the Django project (like database, middleware, and static file settings).
  - **`urls.py`**: Main URL routing for the project. It connects the app's URL routing with the project-level routing.
  - **`wsgi.py`**: Configures the WSGI server for deploying the Django application (for synchronous deployment).
  - **`asgi.py`**: Configures the ASGI server for asynchronous deployment.

- **`manage.py`**: The Django management file, which provides several utility commands (such as `runserver`, `makemigrations`, etc.) to manage the project.

- **`README.md`**: This file contains the documentation for the project, including setup instructions, features, and folder structure.



# Setup and Installation

Follow these steps to get the development environment set up:


 1. ## Clone the repository to your local machine.
     
       git clone <repo-link>
       cd <repo-folder>
   
  2. ## Create virtual environment
      
       python -m venv venv
  3. ## On Windows, use this command to activate
   
      venv\Scripts\activate
  
  4. ## On macOS/Linux, use this command to activate
      source venv/bin/activate

  5. ## Install Dependencies
     ## Install the required Python packages by running:
              pip install -r requirements.txt
     ## If the requirements.txt file doesn't exist, install the following manually:
            - pip install Django==5.0.6
            - pip install djangorestframework==3.15.1
            - pip install psycopg2
  6. ## Set Up the Database
         python manage.py migrate
  7. ## Run the Development Server
        python manage.py runserver
     
     Visit http://127.0.0.1:8000/ in your browser to access the web app.







