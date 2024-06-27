  # <img src="./public/favicon.png" alt="Logotype" style="width: 40px; height: auto;"> Nanny.Services

"Nanny.Services" is a web application designed to connect users with available nannies. It allows users to browse through a list of nannies, filter them based on various criteria, and registered users can add or remove their favorite nannies. The application also provides features for user authentication, allowing users to register, login, and manage their profiles.

### Pages

**1. Home**

- Welcomes users with a site title, company slogan, and a call-to-action button redirecting to the "Nannies" page.

![Home Page](./public/1.jpg)

**2. Nannies**

- Lists available nannies. Each nanny card includes essential details and a "Read more" button for expanded information.
- Supports sorting (alphabetically A-Z, Z-A), filtering by price, and sorting by popularity.
- Features dynamic loading of nanny cards with a "Load more" button.
- Allows authenticated users to add nannies to favorites.

![Nannies Page](./public/2.jpg)

**3. Favorites**

- Private page accessible to authenticated users.
- Allows users to view and manage their favorite nannies.

![Favorites Page](./public/3.jpg)

## Features

- **User Authentication**: Firebase authentication for registration, login, and logout.
- **Adaptive Design**: Fluid layout for breakpoints at 320px, 375px, 768px, and 1440px. Ensures compatibility and usability across various devices.
- **Modal Dialogs**: Used for login/registration/logout and appointment scheduling.
- **Form Validation**: Implemented using React Hook Form and Yup for client-side validation.

<div align="center" style="display: flex; gap: 10px; width: 100%;"> 
<img src="./public/4.jpg" alt="Feature Registration" width="45%" />
<img src="./public/5.jpg" alt="Feature Login" width="45%" />
</div>

## About the Project

[**Layout**](https://www.figma.com/design/u36ajEOsnwio2GDGiabVPD/Nanny-Sevices?node-id=0-1&t=InhTF7JPicvjF7lI-0) |
[**Technical Task**](https://docs.google.com/document/d/19ugM1gvOw81nCyALr4EZs3dmv6OfJm94VjupcytbnJY/edit)

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Firebase Realtime Database](https://img.shields.io/badge/firebase-realtime%20database-orange?style=for-the-badge&logo=firebase&logoColor=white)

## Deployment

This project is deployed on Vercel. Check it out: [**Nanny.Services**](https://nanny-services-sigma.vercel.app/)
