import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

// 1.
client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error)
