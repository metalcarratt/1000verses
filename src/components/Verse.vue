<template>
    <div class="verseBg mountainRoad">
        <div class="contents">
            <span class="buttons">
                <button @click="prevBtn" :disabled="!hasPrev()">&lt; Previous</button>
                <button @click="nextBtn" :disabled="!hasNext()">Next &gt;</button>
            </span>
            <span class="verse">{{ verse }}</span>
            <span class="reference">{{ ref }}</span>
        </div>
    </div>
</template>

<script>
import verses from '@/verses.js';

export default {
    data() {
        return {
            id: 0,
            verse: '',
            ref: ''
        }
    },
    mounted() {
        this.updateForId();
    },
    watch: {
        '$route.params'() {
            this.updateForId();
        }
    },
    methods: {
        updateForId() {
            this.id = parseInt(this.$route.params.id);
            this.verse = verses[this.id].verse;
            this.ref = verses[this.id].ref;
        },
        hasPrev() {
            return (this.id - 1) >= 0;
        },
        prevBtn() {
            if (this.hasPrev()) {
                const newId = this.id - 1;
                this.$router.push('/' + newId);
            }
        },
        hasNext() {
            return (this.id + 1) <= 999;
        },
        nextBtn() {
            if (this.hasNext()) {
                const newId = this.id + 1;
                this.$router.push('/' + newId);
            }
        }
    }
}
</script>