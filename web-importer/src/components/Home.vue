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
        file: null,
        validated: true, //implement rules to validate the file
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (this.form.validated) {
        this.onReset();
        alert("Dados importados com sucesso");
      } else {
        alert("Selecione um arquivo válido");
      }
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
