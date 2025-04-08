<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs';
import '../styles.css';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}
</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to export a dashboard to a PDF file and save it:</h4>
        <div class="container-button">
            <button @click="saveReportPdf" class="button" title="Export Dashboard to PDF File">Export to PDF</button>
        </div>
    </div>
</template>

<style scoped></style>
