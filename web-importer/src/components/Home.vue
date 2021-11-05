<template>
  <div class="home-content">
    <h1>TXT to DB Importer</h1>
    <p>Upload the .txt file to start the process:</p>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-file
        required
        v-model="form.file"
        :state="Boolean(form.file)"
        placeholder="Choose a file or drop it here"
        drop-placeholder="Drop file here"
        v-on:change="onChangeFileUpload()"
      ></b-form-file>

      <div class="mt-3 buttons">
        <b-button type="submit" variant="primary" class="mr-1">
          Import
        </b-button>
        <b-button type="reset" variant="danger">Clean</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      form: {
        file: "",
      },
      show: true,
    };
  },
  methods: {
    onChangeFileUpload() {
      this.form.file = this.$refs.file.files[0];
    },
    onSubmit(event) {
      event.preventDefault();

      if (this.form.file) {
        this.onReset();
        alert("Dados importados com sucesso");
      } else {
        alert("Selecione um arquivo válido");
      }

      // let formData = new FormData();
      // formData.append("file", this.form.file);

      // this.axios
      //   .post("http://localhost:8000/api", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then(function (data) {
      //     alert("Success");
      //     console.log(data.data);
      //   })
      //   .catch(function (e) {
      //     alert("Faliure");
      //     console.log(e);
      //   });
    },
    onReset(event) {
      if (event) {
        event.preventDefault();
      }
      // Reset our form values
      this.form.file = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-content {
  width: 600px;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 10px #ccc;
}

h1 {
  font-size: 25px;
}
</style>
