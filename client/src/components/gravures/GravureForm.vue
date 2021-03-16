<template>
  <div style="width: 80%">
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <filter id="dropshadow" height="250%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <!-- stdDeviation is how much to blur -->
        <feOffset dx="25" dy="15" result="offsetblur" />
        <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
          <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic" />
          <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>
      <path
        :d="drawer"
        :fill="color"
        :style="
          `stroke-width: 8px;
        stroke-opacity: 0.75;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dashoffset: 3px;
        transition:all 1s ease;
        stroke-dasharray: 2px;` +
            (selected === name ? `stroke:#039BE5` : ``) +
            (sizeSelecting ? `stroke:#039BE5;filter:url(#dropshadow);` : ``)
        "
      />
    </svg>
    <v-row class="justify-center aling-center wrapper">
      <v-col
        cols="8"
        ref="firstLine"
        tag="div"
        :style="{ border: isOverFlow ? '1px #039be5 solid' : 'none' }"
        v-if="isTextVisible"
        class="text d-flex align-center justify-center"
      >
        <span
          :style="[
            { fontSize: fonts.firstLine.size + 'px' },
            { fontFamily: fonts.firstLine.font }
          ]"
          >{{ texts.first }}</span
        >
      </v-col>
      <v-col
        ref="secondLine"
        cols="8"
        tag="div"
        v-if="isTextVisible"
        class="text"
        :style="{ border: isOverFlow ? '1px #039be5 solid' : 'none' }"
      >
        <span
          :style="[
            { fontSize: fonts.secondLine.size + 'px' },
            { fontFamily: fonts.secondLine.font }
          ]"
          >{{ texts.second }}</span
        >
      </v-col>
      <v-col
        ref="thirdLine"
        cols="8"
        tag="div"
        v-if="isTextVisible"
        class="text"
        :style="{ border: isOverFlow ? '1px #039be5 solid' : 'none' }"
      >
        <span
          :style="[
            { fontSize: fonts.thirdLine.size + 'px' },
            { fontFamily: fonts.thirdLine.font }
          ]"
          >{{ texts.third }}</span
        >
      </v-col>
    </v-row>
    <v-checkbox
      v-if="isTextVisible"
      v-model="isOverFlow"
      class="visibleCheckbox"
      :label="`Overflow strokes`"
    ></v-checkbox>
  </div>
</template>

<script>
import textFit from "textfit";
export default {
  props: {
    drawer: String,
    color: String,
    name: String,
    selected: String,
    texts: Object,
    sizeSelecting: {
      type: Boolean,
      default: false
    },
    fonts: {
      type: Object,
      default: function() {
        return {
          firstLine: { font: "Times New Roman", size: "36px" },
          secondLine: { font: "Comic Sans", size: "30px" },
          thirdLine: { font: "Arial Black", size: "26px" }
        };
      }
    },
    isTextVisible: Boolean
  },
  data() {
    return {
      size: 1,
      isOverFlow: false
    };
  },
  methods: {
    fitText(refName) {
      let line = this.$refs[refName];
      let showedWidth = line.clientWidth;
      let realWidth = line.scrollWidth;
      let textWidth = line.firstChild.clientWidth;
      if (realWidth > showedWidth) {
        this.isOverFlow = true;
        this.fonts[refName].size -= 3;
      } else if (realWidth <= showedWidth) {
        this.fonts[refName].size++;
      }
      if (realWidth == showedWidth) this.isOverFlow = false;
    }
  },
  watch: {
    "texts.first": function() {
      this.fitText("firstLine");
    },
    "texts.second": function() {
      this.fitText("secondLine");
    },
    "texts.third": function() {
      this.fitText("thirdLine");
    }
  }
};
</script>

<style>
.wrapper {
  position: relative;
  bottom: 48%;
}
.text {
  height: 5%;
  width: 10vw;
  overflow: hidden;
  border-radius: 15px;
  white-space: nowrap;
  text-align: center;
}
.text span {
  padding: 10px;
}
.visibleCheckbox {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
