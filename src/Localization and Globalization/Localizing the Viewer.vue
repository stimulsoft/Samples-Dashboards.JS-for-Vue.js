<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboards/Dashboard.mrt");

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.appearance.fullScreenMode = true;

// Add a localization file and load the file when the viewer is started
Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile("Localizations/pt.xml");
</script>

<template>
    <Viewer :report="report" :options="viewerOptions" />
</template>

<style scoped></style>