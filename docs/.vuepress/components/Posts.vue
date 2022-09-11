<template>
    <div v-for="page in pages">
        <div class="page-detail">
            <router-link :to="page.path">
                <h2>{{ page.title }}
                    <template v-if="page.frontmatter.features">
                        <Badge v-for="feature in page.frontmatter.features"  type="tip" :text="feature" vertical="top" />
                    </template>
                </h2>
            </router-link>
            <img v-if="page.frontmatter.image" class="article-image" :src="page.frontmatter.image"/>
            <p>{{ page.frontmatter.description }}</p>
            <p><router-link :to="page.path">Mehr Erfahren</router-link></p>

        </div>
    </div>


</template>
<script>
    import {usePages} from '@temp/pages'

    export default {
        props: {
            type: String
        },
        data() {
            return {
                pages: []
            }
        },
        setup(props) {
            const pages = props.type ?
                usePages().filter(page => page.frontmatter.type === props.type) :
                usePages();
            console.log(pages);
            return {pages}
        }
    }
</script>

