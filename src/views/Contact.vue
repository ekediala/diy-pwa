<template>
  <div>
    <v-card class="text-xs-center">
      <v-card-title primary-title>
        <h2 style="margin: auto" class="headline">Contact</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <form @submit.prevent="submit">
          <v-text-field label="Name" required v-model="name" :disabled="loading"></v-text-field>
          <small v-if="error.name">We need to know your name.</small>
          <v-text-field
            label="Email"
            required
            v-model="email"
            :disabled="loading"
            hint="We won't share your email with anyone."
          ></v-text-field>
          <small v-if="error.email">Your email address is invalid.</small>
          <v-textarea
            label="Message"
            required
            v-model="message"
            :disabled="loading"
            hint="Enter your message."
          ></v-textarea>
          <small v-if="error.message">You cannot send us an empty message.</small>
          <br>
          <v-btn
            @click.prevent="submit"
            type="submit"
            :loading="loading"
            style="margin: auto"
            round
            color="primary"
          >Message</v-btn>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      loading: false,
      error: {
        name: false,
        email: false,
        message: false
      }
    };
  },

  methods: {
    validate() {
      if (this.name.length <= 0) {
        this.error.name = true;
        return false;
      } else {
        this.error.name = false;
      }

      if (!this.validateEmail(this.email)) {
        this.error.email = true;
        return false;
      } else {
        this.error.email = false;
      }

      if (this.message.length < 3) {
        this.error.message = true;
        return false;
      } else {
        this.error.message = false;
      }

      return true;
    },

    validateEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    submit() {
      if (this.validate()) {
        this.loading = true;
        let templateParams = {
          name: this.name,
          email: this.email,
          message: this.message
        };

        emailjs
          .send("gmail", "template_mGoqNyJv", templateParams)
          .then(response => {
            alert("Message sent. We'll get back to you shortly");
            this.loading = false;
          })
          .catch(error => {
            alert("Message send failed. Please try again");
            this.loading = false;
            console.log(error);
          });
      }
      return false;
    }
  }
};
</script>

<style scoped>
small {
  color: red;
}
</style>