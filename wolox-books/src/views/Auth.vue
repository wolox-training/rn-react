<template lang='pug'>
.register-form
  button.button-logout(@click="logout")
    | Logout
</template>

<script>
import { localStorageService } from '../services/LocalStorage'
import { clearHeaders } from '../config/api'
import { getBooks } from '../services/BookService'

export default {
  name: 'Auth',
  data () {
    return {
      books: null
    }
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
      debugger
      if (response.ok) {
        this.books = response.data
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.register-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  align-self: center;
}

.label {
  text-align: left;
}

.button-logout {
  max-width: 300px;
  width: 100%;
  text-align: center;
  align-self: center;
}
</style>
