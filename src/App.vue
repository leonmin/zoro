<template>
  <div id="app">
    <row>
      <stack>
        <logo :src="logo" />
        <positioned :w="135" :h="35" :l="0" :t="0">
          <file @change="handleChange" />
        </positioned>
      </stack>
    </row>
    <sizebox :h="12" />
    <row>
      <ppt ref="ppt" />
      <lab />
    </row>
  </div>
</template>

<script>
import logo from './static/logo.png'
import marked from 'marked'
import ppt from '@/views/ppt'
import lab from '@/views/lab'
export default {
  components: {
    ppt,
    lab,
  },
  data() {
    return {
      logo,
      page: 0,
      pages: []
    }
  },
  methods: {
    handleChange(e) {
      const file = e.target.files[0]
      console.log('change', file)

      if (file) {
        localStorage.setItem('pptName', file.name)
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onload = (ev) => {
          const buffer = Buffer.from(ev.target.result)
          const mdstr = buffer.toString()
          
          const md = marked(mdstr, {
            render: new marked.Renderer()
          })
          this.pages = md.split('<p>// ppt</p>')
          localStorage.setItem('pptPages', JSON.stringify(this.pages))
          localStorage.setItem('pptPage', 0)
          this.$refs.ppt.handleDraw()

        }
      }
    },
    handlePage(page) {
      this.page += page
      localStorage.setItem('pptPage', this.page)
    }
  }
}
</script>

