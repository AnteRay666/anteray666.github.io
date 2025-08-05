import { defineClientConfig } from '@vuepress/client';
import CodeOutput from './components/CodeOutput.vue';

export default defineClientConfig({
enhance({ app }) {
app.component('CodeOutput', CodeOutput);
},
});