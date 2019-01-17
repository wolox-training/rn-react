<template lang='pug'>
.content
  navbar
  book-list(:books='books')
</template>

<script>
import { mapState, mapActions } from 'vuex'

import BookList from '@/components/BookList'
import Navbar from '@/components/Navbar'

export default {
  name: 'Auth',
  computed: {
    ...mapState([
      'books'
    ]) },
  components: {
    BookList,
    Navbar
  },
  created () {
    this.fetchBooks()
  },
  methods: {
    ...mapActions([
      'fetchBooks'
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
}
</style>
