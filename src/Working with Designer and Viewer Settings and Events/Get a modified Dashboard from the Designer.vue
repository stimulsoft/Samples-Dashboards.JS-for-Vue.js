<script setup lang="ts">
import { Designer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/designer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Dashboards/Dashboard.mrt");

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.fullScreenMode = true;

function onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
    alert("The link to the dashboard has been changed");
    report = args.report;
}
</script>

<template>
    <Designer :report="report" :options="designerOptions" @assigned-report="onAssignedReport" />
</template>

<style scoped></style>
