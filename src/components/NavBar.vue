<script>
export default {
    name: 'NavBar'
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand text" to="/">Formkit-Form</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link active" aria-current="page" to="/register"><i class="bi bi-person-plus-fill"></i> Register-User</router-link>
                    <router-link class="nav-link active" to="/user"><i class="bi bi-person-fill-check"></i> User-Info</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>