<template>
  <div class="book-detail" v-if="book">
    <button @click="goBack" class="back-button">← Назад к списку</button>
    
    <BookDetail :book="book" @delete-book="deleteBook" @edit-book="editBook" />
  </div>
  
  <div v-else class="not-found">
    <h2>Книга не найдена</h2>
    <router-link to="/books" class="back-link">Вернуться к списку книг</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BookDetail from '../components/BookDetail.vue'

const route = useRoute()
const router = useRouter()
const book = ref(null)

const goBack = () => {
  router.push('/books')
}

const editBook = () => {
  router.push(`/add-book?edit=${book.value.id}`)
}

const deleteBook = () => {
  if (confirm('Вы уверены, что хотите удалить эту книгу?')) {
    const books = JSON.parse(localStorage.getItem('books') || '[]')
    const updatedBooks = books.filter(b => b.id !== book.value.id)
    localStorage.setItem('books', JSON.stringify(updatedBooks))
    router.push('/books')
  }
}

onMounted(() => {
  const bookId = parseInt(route.params.id)
  const books = JSON.parse(localStorage.getItem('books') || '[]')
  book.value = books.find(b => b.id === bookId)
})
</script>

<style scoped>
.book-detail {
  animation: fadeIn 0.5s ease-in;
}

.back-button {
  background-color: #95a5a6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #7f8c8d;
}

.not-found {
  text-align: center;
  padding: 50px;
}

.not-found h2 {
  color: #e74c3c;
  margin-bottom: 20px;
}

.back-link {
  color: #3498db;
  text-decoration: none;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>