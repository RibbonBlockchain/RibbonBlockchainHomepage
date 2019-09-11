<template>
  <div>
    <link rel="stylesheet" type="text/css" href="//wpcc.io/lib/1.0.2/cookieconsent.min.css" />
    <script src="//wpcc.io/lib/1.0.2/cookieconsent.min.js"></script>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("load", function() {
      window.wpcc.init({
        border: "thin",
        corners: "small",
        colors: {
          popup: { background: "#f6f6f6", text: "#000000", border: "#f6f6f6" },
          button: { background: "#ef5178", text: "#ffffff" }
        }
      });
    });
  }
};
</script>