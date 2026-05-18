import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import BookDetailView from '../views/BookDetailView.vue'
import AddBook from '../components/AddBook.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/book/:id',
    name: 'book-detail',
    component: BookDetailView,
    props: true
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: AddBook
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router