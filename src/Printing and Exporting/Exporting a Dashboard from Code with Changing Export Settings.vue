<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-dashboards-js-vuejs';
import '../styles.css';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile('Dashboards/Dashboard.mrt');

    var settings = new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings();
    settings.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
    settings.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A3;

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, null, settings);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}
</script>

<template>
    <div class="container">
        <h4>This example shows how to export a dashboard to a PDF file and adjust the export settings via code:</h4>
        <div class="container-button">
            <button @click="saveReportPdf" class="button" title="Export Dashboard to PDF File">Export to PDF</button>
        </div>
    </div>
</template>

<style scoped></style>
