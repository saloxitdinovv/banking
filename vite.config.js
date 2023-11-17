// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        addcard: resolve(__dirname, 'pages/addcard/index.html'),
        addTrans: resolve(__dirname, 'pages/addTrans/index.html'),
        cardID: resolve(__dirname, 'pages/cardID/index.html'),
        cards: resolve(__dirname, 'pages/cards/index.html'),
        signin: resolve(__dirname, 'pages/signin/index.html'),
        signup: resolve(__dirname, 'pages/signup/index.html'),
        transactions: resolve(__dirname, 'pages/transactions/index.html'),
      },
    },
  },
})