<template>
  <div>
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
          <v-toolbar class="pt-5 blue darken-4">
            <v-toolbar-items>
              <v-toolbar-title class="white--text"
                ><h4>Welcome Back</h4></v-toolbar-title
              >
            </v-toolbar-items>
          </v-toolbar>
          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-alert v-if="error" dense outlined type="error">
                  Error email or password !
                </v-alert>
                <v-alert v-if="success" dense text type="success">
                  Login successful !
                </v-alert>
                <v-form v-model="valid" ref="form">
                  <v-text-field
                    label="Enter your e-mail address"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Enter your password"
                    v-model="password"
                    min="8"
                    @keydown.enter="submit"
                    :append-icon="e1 ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="e1 = !e1"
                    :type="e1 ? 'password' : 'text'"
                    :rules="passwordRules"
                    counter
                    required
                  ></v-text-field>
                  <v-layout justify-space-between>
                    <v-btn
                      @click="submit"
                      :class="{
                        'blue darken-4 white--text': valid,
                        disabled: !valid,
                      }"
                      >Login</v-btn
                    >
                    <a href="">Forgot Password</a>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      e1: false,
      password: "",
      error: false,
      success: false,
      passwordRules: [(v) => (!!v && v.length >= 8) || "Password is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    redirect(path) {
      this.$router.push(path);
    },
    submit(e) {
      e.preventDefault();

      this.axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((data) => {
          localStorage.setItem("authToken", data.data.tokens.access.token);
          localStorage.setItem("refreshToken", data.data.tokens.refresh.token);
          localStorage.setItem("user", JSON.stringify(data.data.user));
          console.log("Giriş Başarılı !");
          this.error = false;
          this.success = true;
          setTimeout(() => {
            if (data.data.user.role == "admin") this.redirect("/panel");
            else this.redirect("/");
          }, 1000);
        })
        .catch((err) => {
          console.log("Giriş başarısız !");
          this.error = true;
        });
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
