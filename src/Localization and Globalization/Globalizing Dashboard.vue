<script setup lang="ts">
import { ref, watch } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-dashboards-js-vuejs/viewer';
import '../styles.css';

var selectedCountry = ref('en-US');
var report: Stimulsoft.Report.StiReport;

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.height = '800px';

watch(
    selectedCountry,
    () => {
        const locFile = `Localizations/` + selectedCountry.value.substring(0, 2) + '.xml';
        Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

        report = new Stimulsoft.Report.StiReport();
        report.loadFile('Dashboards/Globalization.mrt');
        report.culture = selectedCountry.value;
    },
    { immediate: true }
);
</script>

<template>
    <div class="container">
        <div class="container-control">
            <label class="label-globalization">Select Language</label>
            <select v-model="selectedCountry" class="select-globalization">
                <option value="en-US">English</option>
                <option value="de-DE">Deutsch</option>
                <option value="ru-RU">Russian</option>
            </select>
        </div>
        <div>
            <Viewer :key="selectedCountry" :report="report" :options="viewerOptions" />
        </div>
    </div>
</template>

<style scoped></style>
