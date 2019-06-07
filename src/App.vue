<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" sticky=true style="background-color:#7b9a5f;">
        <b-navbar-brand href="#/">
        <img src="./assets/title.png" class="d-inline-block align-center" alt="title" height="50pt" width="auto">
        <font-awesome-icon icon="frog" spin/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/Research">研究</b-nav-item>
          <b-nav-item href="#/Products">作成物</b-nav-item>
          <b-nav-item href="#/Hobby">趣味</b-nav-item>
          <b-nav-item href="https://www.at-contact.jp/" target="_brank">コンタクト</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    <transition mode=”out-in”>
      <router-view/>
    </transition>

    <b-navbar toggleable="lg" type="dark" fixed="bottom" style="background-color:#7b9a5f;">
      <b-navbar-brand class= "mx-auto">
        <p class="font-weight-bold">© Copyrights 2019 Jin Yagi - All Rights Reserved</p>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
