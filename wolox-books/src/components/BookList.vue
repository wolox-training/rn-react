<template lang='pug'>
.books
  .book(v-for="book in books" :key="book.id")
    img.image(:src="book.image_url" :alt="book.title")
    h3.title
      | {{book.title}}
    span.author
      | {{book.author}}
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: []
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables/color';

.books {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin: auto;
}

.book {
  box-shadow: 2px 2px 0 $black-shadow;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  width: 220px;
  height: 280px;
  margin: 30px;
  background-color: $white;
}

.image {
  object-fit: cover;
  width: 185px;
  height: 185px;
  margin-bottom: 10px;
}

.title {
  color: $black;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
  min-height: 30px;
}

.author {
  color: $oslo-gray;
  font-size: 12px;
  text-align: left;
}
</style>
