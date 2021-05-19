<template>
  <div id="app">
    <input type="file" @change="handleChange">
    <span @click="handlePage(-1)">left</span>
    <span>{{page}}/{{pages.length}}</span>
    <span @click="handlePage(1)">right</span>
    <ppt-wrap>
      <ppt-view :page="page">
        <ppt-page v-for="(page, idx) in pages" :key="idx" v-html="page" v-highlight></ppt-page>
      </ppt-view>
    </ppt-wrap>
  </div>
</template>

<script>
import { pptWrap, pptView, pptPage} from '@/components/global/index'
import MarkdownIt from 'markdown-it'
import { indent } from 'indent.js'
const markdown = new MarkdownIt()
export default {
  components: {
    pptWrap,
    pptView,
    pptPage,
  },
  data() {
    return {
      page: 0,
      pages: []
    }
  },
  mounted() {
    this.page = parseInt(localStorage.getItem('page') || 0)
    this.pages = JSON.parse(localStorage.getItem('ppt') ||[])
  },
  methods: {
    handleChange(e) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = (ev) => {
          const buffer = Buffer.from(ev.target.result)
          const mdstr = buffer.toString()
          // console.log('mdstr', mdstr.split('// ppt'))
          const x = markdown.render(mdstr, {
            breaks: true
          })
          const pages = x.split('<p>// ppt</p>')
          this.pages = Array.from(pages, x => indent.html(x, {
            tabString: '  '
          }))
          localStorage.setItem('ppt', JSON.stringify(this.pages))
          console.log('x', this.pages)
          // const mdstr = parseBuffer(ev.target.result)
          // if (mdstr) {
          //   this.pages = mdstr.split('// ppt')
          //   localStorage.setItem('ppt', JSON.stringify(this.pages))
          // }
        }
      }
    },
    handlePage(page) {
      this.page += page
      localStorage.setItem('page', this.page)
    }
  }
}
</script>

