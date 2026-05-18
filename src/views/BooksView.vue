<template>
  <div class="books-view">
    <h1>Наши книги</h1>
    
    <CategoryFilter 
      :categories="categories" 
      v-model:selected-category="selectedCategory"
      @category-changed="filterBooks"
    />
    
    <BookList 
      :books="filteredBooks" 
      @book-selected="selectBook"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CategoryFilter from '../components/CategoryFilter.vue'
import BookList from '../components/BookList.vue'

const router = useRouter()

const books = ref([])
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Все книги' },
  { id: 'fiction', name: 'Художественная литература' },
  { id: 'science', name: 'Научная литература' },
  { id: 'history', name: 'История' },
  { id: 'philosophy', name: 'Философия' }
]

const filteredBooks = computed(() => {
  if (selectedCategory.value === 'all') {
    return books.value
  }
  return books.value.filter(book => book.category === selectedCategory.value)
})

const filterBooks = (category) => {
  selectedCategory.value = category
}

const selectBook = (bookId) => {
  router.push(`/book/${bookId}`)
}

onMounted(() => {
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    books.value = JSON.parse(storedBooks)
  } else {
    books.value = [
      { id: 1, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', category: 'fiction', year: 1967, description: 'Знаменитый роман о визите сатаны в советскую Москву.' },
      { id: 2, title: 'Краткая история времени', author: 'Стивен Хокинг', category: 'science', year: 1988, description: 'Научно-популярная книга о космологии.' },
      { id: 3, title: 'Война и мир', author: 'Лев Толстой', category: 'fiction', year: 1869, description: 'Эпический роман о русском обществе в эпоху Наполеоновских войн.' },
      { id: 4, title: 'Sapiens: Краткая история человечества', author: 'Юваль Ной Харари', category: 'history', year: 2011, description: 'История развития человеческого вида.' },
      { id: 5, title: 'Так говорил Заратустра', author: 'Фридрих Ницше', category: 'philosophy', year: 1883, description: 'Философский роман о сверхчеловеке.' }
    ]
  }
})
</script>

<style scoped>
.books-view {
  animation: fadeIn 0.5s ease-in;
}

.books-view h1 {
  color: #2c3e50;
  margin-bottom: 30px;
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