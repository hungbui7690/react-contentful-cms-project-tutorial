/*
  Setup
  ~~ npm create vite@latest


***************************

  Hero Component
  - Undraw : https://undraw.co/



***************************

  Data 
  - data.js


***************************
***************************

  Headless CMS
  - A headless CMS is a back-end only content management system that provides content creators with an intuitive interface for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. 
  - This approach allows for greater flexibility and scalability, as the content can be easily distributed to multiple channels and devices, without being limited by the constraints of a particular front-end system.


***************************

  Contentful
  - pic
  - Contentful : https://www.contentful.com/
    -> Create Account
    -> Start from Scratch
    -> Content Model -> Create Content Model


***************************

  Content
  - pic
  - Add Content based on Model


***************************

  Contentful API Docs
  - Settings -> API Keys -> Get Space ID, Access Token.
  - https://www.contentful.com/developers/docs/javascript/sdks/
  - pic


***************************

  Install SDK
  ~~ npm install contentful


***************************

  .env                # loaded in all cases
  .env.local          # loaded in all cases, ignored by git
  .env.[mode]         # only loaded in specified mode
  .env.[mode].local   # only loaded in specified mode, ignored by git

***************************

  Get Entries
  1. create fetchProjects.jsx
  2. Projects.jsx


*/

import Hero from './Hero'
import Projects from './Projects'

function App() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}

export default App
