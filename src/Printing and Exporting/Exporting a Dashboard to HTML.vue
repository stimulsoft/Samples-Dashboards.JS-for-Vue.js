<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs'

async function saveReportHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboards/Dashboard.mrt");

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".html", "text/html;charset=utf-8");
}
</script>

<template>
    <button @click="saveReportHtml">Export and Save HTML dashboard to file</button>
</template>

<style scoped></style>