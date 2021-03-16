<template>
  <div id="color-picker">
    <div class="wrapper-dropdown">
      <span @click="toggleDropdown()" v-html="selector"></span>
      <ul class="dropdown" v-show="active">
        <li
          v-for="(color, index) in colors"
          :key="index"
          style="text-align: center"
          @click="setColor(color.hex, color.name)"
        >
          <span :style="{ background: color.hex }"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          hex: "#00759A",
          name: "Blue"
        },
        {
          hex: "#F7941D",
          name: "Orange"
        },
        {
          hex: "#A71930",
          name: "Red"
        },
        {
          hex: "#679146",
          name: "Green"
        }
      ],
      active: false,
      selectedColor: "",
      selectedColorName: ""
    };
  },
  computed: {
    selector: function() {
      if (!this.selectedColor) {
        return "Color";
      } else {
        return (
          '<span style="background: ' +
          this.selectedColor +
          '"></span> ' +
          this.selectedColorName
        );
      }
    }
  },
  methods: {
    setColor: function(color, colorName) {
      this.selectedColor = color;
      this.selectedColorName = colorName;
      this.active = false;
    },
    toggleDropdown: function() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Arial";
}
.wrapper-dropdown {
  position: relative;
  background: #fff;
  color: #2e2e2e;
  outline: none;
  cursor: pointer;
}
.wrapper-dropdown > span {
  width: 100%;
  display: block;
  border: 1px solid #ababab;
  padding: 5px;
}
.wrapper-dropdown > span > span {
  padding: 0 12px;
  margin-right: 5px;
}
.wrapper-dropdown > span:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  right: 3px;
  top: calc(50% + 4px);
  margin-top: -6px;
  border-width: 6px 6px 0 6px;
  border-style: solid;
  border-color: #2e2e2e transparent;
}

.wrapper-dropdown .dropdown {
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  font-weight: normal;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  border: 1px solid #ababab;
  border-top: 0;
}

.wrapper-dropdown .dropdown li {
  display: block;
  text-decoration: none;
  color: #2e2e2e;
  padding: 5px;
  cursor: pointer;
}

.wrapper-dropdown .dropdown li > span {
  padding: 0 12px;
  margin-right: 5px;
}

.wrapper-dropdown .dropdown li:hover {
  background: #eee;
  cursor: pointer;
}
</style>
