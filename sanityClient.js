import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'your-project-id', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // or the name of your dataset
  useCdn: true // `false` if you want to ensure fresh data
});