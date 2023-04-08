<script>
export default {
    name: 'UserPage',
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        this.user = this.$store.state.userData;
        console.log(this.user);
    },
}
</script>

<template>
    <div class="container-fluid p-4 mt-4 me-4">
        <h1 class="text-primary mt-4"><i class="bi bi-person-vcard"></i> User Information</h1>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-primary">
                        <th scope="row">First Name:</th>
                        <td>{{ user.fname }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name:</th>
                        <td>{{ user.lname }}</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">Mobile:</th>
                        <td>+91-{{ user.mobile }}</td>
                        <!-- <td colspan="2">Larry the Bird</td> -->
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td>{{ user.email }}</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">Password:</th>
                        <td>{{ user.password }}</td>
                    </tr>
                    <tr>
                        <th scope="row">D.O.B:</th>
                        <td>{{ user.dob }}</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">Gender:</th>
                        <td>{{ user.gender }}</td>
                    </tr>
                    <tr>
                        <th scope="row">Degree:</th>
                        <td>{{ user.degree }}</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">Skills:</th>
                        <td>{{ user.skills }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>