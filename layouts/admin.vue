<template>
    <div :class="{'g-sidenav-show': $store.state.drawer.drawer, 'g-sidenav-pinned': $store.state.drawer.drawer}">

        <sidebar></sidebar>
        <!-- Main content -->
        <div class="main-content" id="panel">
            <!-- Topnav -->
            <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <h2 style="color: #fff; font-weight: bold">Jasa Marga Learning Institute</h2>
                        <!-- Search form -->

                        <!-- Navbar links -->
                        <ul class="navbar-nav align-items-center  ml-md-auto ">
                            <li class="nav-item d-xl-none">
                                <!-- Sidenav toggler -->
                                <div class="pr-3 sidenav-toggler2 sidenav-toggler-dark" @click="toggle()"
                                     style="cursor: pointer"
                                     data-target="#sidenav-main">
                                    <div class="sidenav-toggler-inner">
                                        <i class="sidenav-toggler-line"></i>
                                        <i class="sidenav-toggler-line"></i>
                                        <i class="sidenav-toggler-line"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item d-sm-none">
                                <a class="nav-link" href="#" data-action="search-show"
                                   data-target="#navbar-search-main">
                                    <i class="ni ni-zoom-split-in"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown" v-show="false">
                                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <i class="ni ni-bell-55"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden"
                                     style="z-index: 2001">
                                    <!-- Dropdown header -->
                                    <div class="px-3 py-3">
                                        <h6 class="text-sm text-muted m-0">You have <strong
                                            class="text-primary">13</strong> notifications.
                                        </h6>
                                    </div>
                                    <!-- List group -->
                                    <div class="list-group list-group-flush">
                                        <a href="#!" class="list-group-item list-group-item-action">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Avatar -->
                                                    <img alt="Image placeholder"
                                                         src="~static/assets/img/theme/team-1.jpg"
                                                         class="avatar rounded-circle">
                                                </div>
                                                <div class="col ml--2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 class="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div class="text-right text-muted">
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" class="list-group-item list-group-item-action">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Avatar -->
                                                    <img alt="Image placeholder"
                                                         src="~static/assets/img/theme/team-2.jpg"
                                                         class="avatar rounded-circle">
                                                </div>
                                                <div class="col ml--2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 class="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div class="text-right text-muted">
                                                            <small>3 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" class="list-group-item list-group-item-action">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Avatar -->
                                                    <img alt="Image placeholder"
                                                         src="~static/assets/img/theme/team-3.jpg"
                                                         class="avatar rounded-circle">
                                                </div>
                                                <div class="col ml--2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 class="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div class="text-right text-muted">
                                                            <small>5 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" class="list-group-item list-group-item-action">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Avatar -->
                                                    <img alt="Image placeholder"
                                                         src="~static/assets/img/theme/team-4.jpg"
                                                         class="avatar rounded-circle">
                                                </div>
                                                <div class="col ml--2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 class="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div class="text-right text-muted">
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" class="list-group-item list-group-item-action">
                                            <div class="row align-items-center">
                                                <div class="col-auto">
                                                    <!-- Avatar -->
                                                    <img alt="Image placeholder"
                                                         src="~static/assets/img/theme/team-5.jpg"
                                                         class="avatar rounded-circle">
                                                </div>
                                                <div class="col ml--2">
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h4 class="mb-0 text-sm">John Snow</h4>
                                                        </div>
                                                        <div class="text-right text-muted">
                                                            <small>3 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- View all -->
                                    <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View
                                        all</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                            <li class="nav-item dropdown">
                                <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    <div class="media align-items-center">
                                        <!-- <span class="avatar avatar-sm rounded-circle"> -->
                                          <!-- <img class="avatar" :src="user.photo_url" /> -->
                                          <div class="avatar avatar-sm rounded-circle" :style="'background: #f3f3f3 url(' + user.photo_url + ') no-repeat top center / cover; width:25px; height:25px'"></div>
                                        <!-- </span> -->
                                        <!-- <div class="classname" :style="'background: #f3f3f3 url(' + user.photo_url + ') no-repeat top center / cover'"></div> -->
                                        <div class="media-body  ml-2  d-none d-lg-block">
                                            <span class="mb-0 text-sm  font-weight-bold">{{user.nama}} <i style="margin-left: 5px" class="fas fa-angle-down"></i> </span>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-menu  dropdown-menu-right ">
                                    <a class="dropdown-item" style="cursor:pointer" @click="logout()">
                                        <i class="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style="min-height: 600px">
            <nuxt/>
                </div>
            <!-- Footer -->
            <footer class="footer pt-0">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-lg-6">
                        <div class="copyright text-center  text-lg-left  text-muted">
                            &copy; 2020 <a href="http://jmli-portal.com/" class="font-weight-bold ml-1" target="_blank">Jasa
                            Marga
                            Learning Institute</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
<script>
    import Sidebar from '../components/Sidebar'
    
    import {mapMutations} from 'vuex';

    export default {
        components: {
            'sidebar': Sidebar
        },
        data() {
            return {
                showSideBar: false,
                collapse: false,
                user: {
                    nama: '',
                    photo_url: ''
                }
            }
        },
        mounted() {
            this.user = {
                nama: this.$auth.$state.user.nm,
                photo_url: this.$auth.$state.user.photo_url
            };

            window.onresize = () => {
                this.changeDrawer();
            };

            window.onload = () => {
                this.changeDrawer();
            }
        },
        methods: {
            changeDrawer() {
                if (window.innerWidth <= 1200) {
                    this.$store.commit('drawer/changeMode', 'mobile')
                } else {
                    this.$store.commit('drawer/changeMode', 'web')
                }
            },
            showMenu() {
                this.showSidebar = !this.showSidebar;
                console.log(this.showSidebar)
            },
            ...mapMutations({
                toggle: "drawer/toggle"
            }),
            logout() {
                this.$auth.logout();
            }
        }
    }

</script>
<style scoped>
    page-enter-active,
    .page-leave-active {
        transition: all .30s ease-out;
    }

    .page-enter,
    .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }

    .sidenav {
        overflow-y: auto;
        overflow-x: hidden !important;
    }

    .navbar-vertical.navbar-expand-xs {
        max-width: 58px;
    }

    .footer {
        padding-left: 30px;
        width: 90%;
    }
</style>
