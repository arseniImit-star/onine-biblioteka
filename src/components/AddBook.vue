<template>
  <div class="add-book">
    <h1>{{ isEditMode ? 'Редактировать книгу' : 'Добавить новую книгу' }}</h1>
    
    <form @submit.prevent="submitForm" class="book-form">
      <div class="form-group">
        <label for="title">Название книги *</label>
        <input 
          type="text" 
          id="title" 
          v-model="formData.title" 
          required
          placeholder="Введите название"
        >
      </div>
      
      <div class="form-group">
        <label for="author">Автор *</label>
        <input 
          type="text" 
          id="author" 
          v-model="formData.author" 
          required
          placeholder="Введите имя автора"
        >
      </div>
      
      <div class="form-group">
        <label for="category">Категория *</label>
        <select id="category" v-model="formData.category" required>
          <option value="">Выберите категорию</option>
          <option value="fiction">Художественная литература</option>
          <option value="science">Научная литература</option>
          <option value="history">История</option>
          <option value="philosophy">Философия</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="year">Год издания *</label>
        <input 
          type="number" 
          id="year" 
          v-model.number="formData.year" 
          required
          min="1000"
          :max="currentYear"
          placeholder="Введите год"
        >
      </div>
      
      <div class="form-group">
        <label for="description">Описание</label>
        <textarea 
          id="description" 
          v-model="formData.description" 
          rows="5"
          placeholder="Введите описание книги"
        ></textarea>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="submit-button">{{ isEditMode ? 'Сохранить изменения' : 'Добавить книгу' }}</button>
        <button type="button" @click="resetForm" class="reset-button">Очистить форму</button>
      </div>
    </form>
    
    <div v-if="showSuccess" class="success-message">
      {{ isEditMode ? 'Книга успешно обновлена!' : 'Книга успешно добавлена!' }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const showSuccess = ref(false)
const isEditMode = ref(false)
const editId = ref(null)

const currentYear = new Date().getFullYear()

const formData = ref({
  title: '',
  author: '',
  category: '',
  year: null,
  description: ''
})

const submitForm = () => {
  const books = JSON.parse(localStorage.getItem('books') || '[]')
  
  if (isEditMode.value) {
    const index = books.findIndex(b => b.id === editId.value)
    if (index !== -1) {
      books[index] = { ...formData.value, id: editId.value }
      localStorage.setItem('books', JSON.stringify(books))
    }
  } else {
    const newBook = {
      id: Date.now(),
      ...formData.value
    }
    books.push(newBook)
    localStorage.setItem('books', JSON.stringify(books))
  }
  
  showSuccess.value = true
  resetForm()
  
  setTimeout(() => {
    showSuccess.value = false
    router.push('/books')
  }, 2000)
}

const resetForm = () => {
  formData.value = {
    title: '',
    author: '',
    category: '',
    year: null,
    description: ''
  }
}

onMounted(() => {
  if (route.query.edit) {
    isEditMode.value = true
    editId.value = parseInt(route.query.edit)
    const books = JSON.parse(localStorage.getItem('books') || '[]')
    const bookToEdit = books.find(b => b.id === editId.value)
    if (bookToEdit) {
      formData.value = { ...bookToEdit }
    }
  }
})
</script>

<style scoped>
.add-book {
  max-width: 600px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-in;
}

.add-book h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.book-form {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.submit-button,
.reset-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.submit-button {
  background-color: #2ecc71;
  color: white;
  flex: 1;
}

.submit-button:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}

.reset-button {
  background-color: #95a5a6;
  color: white;
}

.reset-button:hover {
  background-color: #7f8c8d;
  transform: translateY(-2px);
}

.success-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  text-align: center;
  animation: slideDown 0.5s ease;
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

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>