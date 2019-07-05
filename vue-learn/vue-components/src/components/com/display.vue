<template>
    <div ref="display"></div>
</template>

<script>
import Vue from 'vue'
import randomStr from '../../utils/random_str'
export default {
    props: {
        code: {
            type: String,
            default:''
        }
    },
    data () {
        return {
            html: "",
            js: "",
            css: "",
            component:null,
            id:randomStr()
            
        }
    },
    methods: {
        //source:  .vue 文件代码,即props:code
        //type: 分割的部分,也就是template script style
        getSource(source, type) {
            const regex = new RegExp(`<${type}>[^>]*>`)
            let openingTag = source.match(regex)  //检索正则匹配到的template script style标签

            if (!openingTag) {
                return ""
            } else {
                openingTag = openingTag[0]
            }
            return source.slice(
                source.indexOf(openingTag) + openingTag.length,
                source.lastIndexOf(`<${type}>`)
            )

        },
        splitCode () {
            const script = this.getSource(this.code,"script").replace(
                /export default/,
                "return"
            )
            const style = this.getSource(this.code,"style")
            const template = `<div id="app">${this.getSource(this.code),"template"}</div>`
            this.html = template
            this.js = script
            this.css = style
        },
        renderCode() {
            this.splitCode()
            if(this.html !== "" && this.js !== "") {
                const parseStrToFunc = new Function(this.js)()
                this.parseStrToFunc.template = this.html
                const Component = Vue.extend(parseStrToFunc)
                //手动挂载
                this.component = new Component().$mount()
                this.$refs.display.appendChild(this.component.$el)
                if (this.css !== "") {
                    const style = document.createElement('style')
                    style.type = 'text/css'
                    style.id = this.id
                    style.innerHTML = this.css
                    document.getElementsByTagName('head')[0].appendChild(style)
                }

            }
        },
        //销毁手动挂载的组件
        destroyCode() {
            const $target = document.getElementById(this.id)
            if ($target) {
                $target.parentNode.removeChild($target)
            }
            if (this.component) {
                this.$refs.display.removeChild(this.component.$el)
                this.component.$destroy()
                this.component = null
            }
        }
    },
    mounted () {
        this.renderCode()
    },
    beforeDestroy () {
        this.destroyCode()
    },
    watch: {
        code () {
            this.destroyCode()
            this.renderCode()
        }
    }

}
</script>

<style>

</style>

