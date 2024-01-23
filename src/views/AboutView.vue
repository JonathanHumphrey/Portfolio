<script setup>
import ItemCard from '@/components/ItemCard.vue';

const projects = [
  {
    title: 'Creator Dashboard',
    image: '/creatorDashPreview.png',
    imageAlt: 'Creator Dashboard preview',
    description: 'Webapp using the Twitch API to display linked accounts followed channels and personal channel statistics',
    link: 'https://astounding-blancmange-fb88d6.netlify.app/',
    tags: 'API integration, Pagination, State Management'
  },
  {
    title: 'Lyric Finder',
    image: '/lyricFinderPreview.png',
    imageAlt: 'Lyric Finder preview showing the layout of the project',
    description: 'Searches a local csv file stored on the server using an inverted index and returns relavent songs based on the keyword entered',
    link: 'https://fragrant-lake-1876.fly.dev/',
    tags: 'Local Search, Flask Server, Information Retrieval'
  },
  {
    title: 'NoteMax',
    image: '/noteMaxPreview.png',
    imageAlt: 'NoteMax preview showing the layout of the user dashboard',
    description: 'Fullstack application that allows users to upload PDF templates and rate other PDFs uploaded by users in the same category',
    link: 'https://tangerine-cranachan-78b81e.netlify.app/',
    tags: 'File Storage, Routing, User Authentication'
  },
  
  // Add more projects as needed
]


const handleImageError = (event) => {
  console.error('Error loading image:', event.target.src);
};

</script>

<template>
  <div class="container">
    <div class="projects">
      <div v-for="project in projects">
        <ItemCard>
          <h1>{{ project.title }}</h1>
          <img class="preview" :src="project.image" :alt="project.imageAlt" @error="handleImageError">
          <p>{{ project.description }}</p>
          <div class="footer">
            <a :href="project.link" target="_blank">Link</a>
            <p>Tags: {{ project.tags }}</p>
          </div>
        </ItemCard>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.projects{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  background-color: #3C6E71;
  border-radius: .5rem;
  box-shadow: 2px 3px 16px -4px rgba(0,0,0,0.75);

}
.preview{
    width: 480px;
    height: 260px;
    object-fit: cover;
    border-radius: .25rem;
}
p{
  font-size: 1rem;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  background-color: #3C6E71;
  padding: .5rem;
  width: 4rem;
  border-radius: .25rem;
  color: #EAF6FF;
  box-shadow: 2px 3px 8px -4px rgba(0,0,0,0.75);
  text-align: center;
  font-size: 1rem;
}
a:hover{
  background-color: #284B63;
  color: #EAF6FF;
}
</style>
