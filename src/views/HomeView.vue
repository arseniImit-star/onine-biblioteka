<template>
  <div class="home">
    <div class="hero">
      <h1>Добро пожаловать в Онлайн-библиотеку</h1>
      <p>Откройте для себя мир знаний и вдохновения</p>
      <router-link to="/books" class="cta-button">Начать чтение</router-link>
    </div>
    
    <div class="features">
      <div class="feature">
        <h3>Тысячи книг</h3>
        <p>Огромная коллекция книг на любой вкус</p>
      </div>
      <div class="feature">
        <h3>Удобный поиск</h3>
        <p>Фильтрация по категориям и авторам</p>
      </div>
      <div class="feature">
        <h3>Подробные описания</h3>
        <p>Вся информация о книгах в одном месте</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  animation: fadeIn 0.5s ease-in;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: transform 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 20px;
}

.feature {
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.feature p {
  color: #666;
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