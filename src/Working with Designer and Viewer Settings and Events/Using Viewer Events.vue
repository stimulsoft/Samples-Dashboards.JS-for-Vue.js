<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer'

function onBeginExportReport(args: Stimulsoft.Viewer.BeginExportReportArgs) {
    alert(`onBeginExportReport`);
}

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboards/Dashboard.mrt");

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.toolbar.showSendEmailButton = true;
</script>

<template>
    <Viewer :report="report" :options="viewerOptions" @begin-export-report=onBeginExportReport />
</template>

<style scoped></style>
