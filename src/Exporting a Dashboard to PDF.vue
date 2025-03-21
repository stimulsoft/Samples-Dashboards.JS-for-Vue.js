<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs'

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Dashboard.mrt");

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
}
</script>

<template>
    <button @click="saveReportPdf">Export and Save PDF dashboard to file</button>
</template>

<style scoped></style>