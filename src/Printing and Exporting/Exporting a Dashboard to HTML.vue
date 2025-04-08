<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs';
import '../styles.css';

async function saveReportHtml() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.html', 'text/html;charset=utf-8');
}
</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to export a dashboard to an HTML file and save it:</h4>
        <div class="container-button">
            <button @click="saveReportHtml" class="button" title="Export Dashboard to HTML File">Export to HTML</button>
        </div>
    </div>
</template>

<style scoped></style>
