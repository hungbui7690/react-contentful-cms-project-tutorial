/*
  Refactor Fetch Projects
  1. fetchProjects
    -> change to custom hook

  2. Projects.jsx


**************************

  Deploy to Netlify
  - On Netlify
    -> setup build command -> npm run build
    -> env variables


**************************

  Webhooks
  - use to trigger build programmatically
  - pic
  - after setup, everytime we add Content to Contentful -> it will trigger builds on Netlify



*/

import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })

      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { loading, projects }
}

export default useFetchProjects
