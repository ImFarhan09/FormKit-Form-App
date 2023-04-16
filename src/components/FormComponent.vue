<script>

export default {
  name: "FormComponent",
  data() {
    return {
      options: {
        "": "Select",
        Male: "Male",
        Female: "Female",
        Other: "Other",
      },
      doptions: {
        "B.E./B.Tech": "B.E./B.Tech",
        "BCA/MCA": "BCA/MCA",
      },
      soptions: {
        "ReactJS": "ReactJS",
        "AngularJS": "AngularJS",
        "VueJS": "VueJS",
      },
      userData: {}
    };
  },
  methods: {
    onSubmit() {
      const string = JSON.stringify(this.userData);
      const formdata = JSON.parse(string);
      console.log(formdata);
      this.$store.commit("setUser", formdata);
      this.$router.push({ name: "User Info" });
    },
  },
};
</script>

<template>
  <div class="container-fluid p-4 mt-4 me-4">
    <h1 class="text-primary mt-4">Registration Form <i class="bi bi-pencil-square"></i></h1>
    <div
      class="border border-1 border-grey p-3 mt-4 rounded"
      style="width: 25rem"
    >
      <FormKit
        type="form"
        submit-label="Register"
        v-model="userData"
        @submit="onSubmit()"
      >
        <FormKit
          type="text"
          label="First Name"
          placeholder="Jack"
          name="fname"
          validation="required"
        />
        <FormKit
          type="text"
          label="Last Name"
          placeholder="Shukla"
          name="lname"
          validation="required"
        />

        <FormKit
          type="number"
          label="Mobile"
          placeholder="9876543210"
          name="mobile"
          help="Enter your 10-digit number"
          validation="required|length:10|matches:/[6-9][0-9]{9}/"
        />
        <FormKit
          type="email"
          label="Email"
          placeholder="example@gmail.com"
          name="email"
          validation="required|email"
        />
        <FormKit
          type="password"
          label="Password"
          placeholder="********"
          name="password"
          validation="required|length:8"
        />
        <FormKit
          type="password"
          label="Confirm password"
          placeholder="********"
          name="password_confirm"
          help="Re-enter same password"
          validation="required|confirm"
        />
        <FormKit
          type="date"
          label="Date of Birth"
          name="dob"
          validation="required|date_before:2010-01-01"
        />
        <FormKit
          type="select"
          label="Gender"
          name="gender"
          :options="options"
          validation="required"
          validation-label="Gender"
        />
        <FormKit
          type="checkbox"
          label="Skills"
          name="skills"
          :options="soptions"
          validation="+min:1"
        />
        <FormKit
          type="radio"
          label="Degree"
          name="degree"
          :options="doptions"
          validation="required"
        />
        <FormKit
          type="checkbox"
          label="I accept "
          name="acceptance"
          validation="required"
          validation-label="Acceptance"
        />
      </FormKit>
    </div>
  </div>
</template>

