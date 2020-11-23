<template>
    <v-card
            max-width="300"
            class="summary-card ma-3 pt-6"
            :class="bgColor"
            dark
            outlined
            tile
            elevation="2">
        <div class="icon-wrapper">
            <v-icon>{{ cardIcon }}</v-icon>
        </div>
        <v-card-title class="headline text-bold">
            <span
                    class="count"
                    :title="cardAmountNew + 'last day'">
                {{ cardAmount }}
            </span>
        </v-card-title>
        <v-card-subtitle
                class="text-center text-bold"
        >

        </v-card-subtitle>
    </v-card>
</template>

<script>
  export default {
    name: 'StatCard',
    data () {
      return {}
    },
    props: {
      bgColor: String,
      cardIcon: String,
      cardTitle: String,
      cardAmount: Number,
      cardAmountNew: Number
    }
  }
</script>