<template lang='pug'>
.content
  .navbar
    .logo
      img.title-image(src='../assets/wolox_logo.svg' alt='wolox logo')
      span.title
        | {{$t('title')}}
    button.button-logout(@click='logout')
      | Logout
  .book
    img.book-image(:src='book.image_url' :alt='book.title')
    .book-info
      .book-header
        h1.book-title
          | {{book.title}}
        span.book-genre
          | {{book.genre}}
      .book-content
        span.book-subtitle
          | Book author:
        span.book-data
          |  {{book.author}}
      .book-content
        span.book-subtitle
          | Publisher:
        span.book-data
          |  {{book.publisher}}
      .book-content
        span.book-subtitle
          | Year of publication:
        span.book-data
          |  {{book.year}}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { localStorageService } from '../services/LocalStorage'
import { clearHeaders } from '../config/api'
import BookList from '@/components/BookList'

export default {
  name: 'Auth',
  computed: {
    ...mapState([
      'book'
    ]) },
  components: {
    BookList
  },
  created () {
    const { id } = this.$route.params
    this.fetchBook({ id })
  },
  methods: {
    logout () {
      localStorageService.removeAccessToken()
      clearHeaders()
      this.$router.push('/login')
    },
    ...mapActions([
      'fetchBook'
    ])
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/variables/color';

.content {
  display: flex;
  flex-direction: column;
  background-color: $wild-sand;
  height: 100vh;
}

.navbar {
  display: flex;
  height: 60px;
  border-radius: 2px;
  box-shadow: 0px 1px 10px $gray-shadow;
  justify-content: space-around;
  background-color: $white;
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

.book {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  box-shadow: 2px 2px 0 $black-shadow;
  display: flex;
  align-self: center;
  padding: 20px;
  background-color: $white;
  height: fit-content;
}

.book-image {
  object-fit: cover;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  align-self: flex-start;
}

.book-info {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  height: 100%;
  margin: 20px;
}

.book-title {
  color: $black;
  font-size: 40px;
  font-weight: 500;
  margin-right: 20px;
  min-height: 30px;
}

.book-genre {
  font-size: 20px;
  font-weight: 250;
}

.book-subtitle {
  color: $black;
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  min-height: 30px;
}

.book-header {
  margin-bottom: 30px;
}

.book-content {
  margin-top: 10px;
}

.book-data {
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  min-height: 30px;
}
</style>
