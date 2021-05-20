<template>
  <column cross="space-between" style="overflow: hidden; width: 720px">
    <row main="space-between">
      <ppt-title>{{ppt.name}}</ppt-title>
      <row>
        <ppt-button :disabled="leftDisabled" @click="handlePage(-1)">上一页</ppt-button>
        <padding p="0 10px">{{ppt.page}}/{{ppt.pages.length - 1}}</padding>
        <ppt-button :disabled="rightDisabled" @click="handlePage(1)">下一页</ppt-button>
      </row>
    </row>
    <sizebox :h="10"></sizebox>
    <ppt-wrap>
      <ppt-view :page="ppt.page">
        <ppt-page v-for="(item, idx) in ppt.pages" :key="idx" v-html="item" v-highlight />
      </ppt-view>
    </ppt-wrap>
  </column>
</template>

<script>
export default {
  data() {
    return {
      ppt: {

        name: '',
        page: 0,
        pages: [],
      }
    }
  },
  mounted() {
    this.handleDraw()
  },
  computed: {
    leftDisabled() {
      return this.ppt.page < 1
    },
    rightDisabled() {
      return this.ppt.page > this.ppt.pages.length - 2
    }
  },
  methods: {
    handleDraw() {
      this.ppt.name = localStorage.getItem('pptName')
      this.ppt.page = parseInt(localStorage.getItem('pptPage') || 0)
      this.ppt.pages = JSON.parse(localStorage.getItem('pptPages') || '[]')
    },
    handlePage(next) {
      if (next > 0) {
        if (!this.rightDisabled) {
          this.ppt.page += next
          localStorage.setItem('pptPage', this.ppt.page)
        }
      } else {
        if (!this.leftDisabled) {
          this.ppt.page += next
          localStorage.setItem('pptPage', this.ppt.page)
        }
      }
    }
  }
}
</script>
