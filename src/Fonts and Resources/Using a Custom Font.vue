<script setup lang="ts">
import { Designer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/designer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboards/CusomFontDashboard.mrt");

// Adding Custom Font
Stimulsoft.Base.StiFontCollection.addFontFile('Fonts/LongCang-Regular.ttf');

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.fullScreenMode = true;
</script>

<template>
    <Designer :report="report" :options="designerOptions" />
</template>

<style scoped></style>