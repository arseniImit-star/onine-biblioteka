<template>
  <div class="book-list">
    <div v-if="books.length === 0" class="empty-state">
      <p>Книги не найдены</p>
    </div>
    
    <div v-else class="books-grid">
      <BookItem 
        v-for="book in books" 
        :key="book.id"
        :book="book"
        @click="emit('book-selected', book.id)"
      />
    </div>
  </div>
</template>

<script setup>
import BookItem from './BookItem.vue'

const props = defineProps({
  books: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['book-selected'])
</script>

<style scoped>
.book-list {
  margin-top: 30px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.empty-state {
  text-align: center;
  padding: 50px;
  background-color: white;
  border-radius: 15px;
  color: #95a5a6;
  font-size: 1.2rem;
}
</style>