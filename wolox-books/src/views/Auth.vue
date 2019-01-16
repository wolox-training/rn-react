<template lang='pug'>
.content
  .navbar
    .logo
      img.title-image(src='../assets/wolox_logo.svg' alt='wolox logo')
      span.title
        | {{$t('title')}}
    button.button-logout(@click='logout')
      | Logout
  book-list(:books='books')
</template>

<script>
import { localStorageService } from '../services/LocalStorage'
import { clearHeaders } from '../config/api'
import { getBooks } from '../services/BookService'

import BookList from '@/components/BookList.vue'

export default {
  name: 'Auth',
  data () {
    return {
      books: null
    }
  },
  components: {
    BookList
  },
  created () {
    this.fetchBooks()
  },
  methods: {
    logout () {
      localStorageService.removeAccessToken()
      clearHeaders()
      this.$router.push('/login')
    },
    async fetchBooks () {
      const response = await getBooks()
      if (response.ok) {
        this.books = response.data
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #F4F4F4;
}

.navbar {
  display: flex;
  height: 60px;
  border-radius: 2px;
  box-shadow: 0px 1px 10px #999;
  justify-content: space-around;
  background-color: white;
}

.logo {
  align-self: center;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-top: 10px;
}

.label {
  text-align: left;
}

.title-image {
  height: 30px;
}

.button-logout {
  height: 20px;
  width: 20px;
  align-self: center;
  text-align: center;
}
</style>
