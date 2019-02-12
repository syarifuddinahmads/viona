<template>
  <div id="default-layout">
    <div class="main-wrapper">
      <HeaderDefault/>
      <SidebarDefault/>
      <div class="main-content">
        <div class="section">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDefault from '@/components/layout/HeaderDefault'
import SidebarDefault from '@/components/layout/SidebarDefault'
export default {
  name:'DefaultLayout',
  components:{
    HeaderDefault,
    SidebarDefault
  }
}
</script>

