import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

import LocalizingTheDesigner from './Localizing the Designer.vue';
import LocalizingTheViewer from './Localizing the Viewer.vue';
import GlobalizingDashboard from './Globalizing Dashboard.vue';

import UsingCustomFont from './Using a Custom Font.vue';
import AddingFontToTheResource from './Adding a Font to the Resource.vue';

import PrintingTheDashboardFromCode from './Printing the Dashboard from Code.vue';
import ExportingDashboardToPDF from './Exporting a Dashboard to PDF.vue';
import ExportingDashboardToHTML from './Exporting a Dashboard to HTML.vue';
import ExportingDashboardFromCodeWithChangingExportSettings from './Exporting a Dashboard from Code with Changing Export Settings.vue';

import CreatingNewDataConnectionFromCode from './Creating a new Data Connection from code.vue';
import RegisteringDataFromCode from './Registering Data from Code.vue';
import UsingSqlDataSources from './Using SQL Data Sources.vue';
import UsingParametersInSqlQuery from './Using Parameters in SQL Query.vue';
import UsingCustomDataAdapter from './Using a Custom Data Adapter.vue';
import SupplyCustomHeadersForJsonDatabase from './Supply Custom Headers for JSON Database.vue';

import CustomizingTheDesigner from './Customizing the Designer.vue';
import ChangingTheDesignerTheme from './Changing the Designer Theme.vue';
import CustomizingTheViewer from './Customizing the Viewer.vue';
import ChangingTheViewerTheme from './Changing the Viewer Theme.vue';
import UsingDesignerEvents from './Using Designer Events.vue';
import UsingViewerEvents from './Using Viewer Events.vue';
import WorkingWithOnDesignAndOnExitEvents from './Working with onDesign and onExit Events.vue';
import UsingTheTwoViewerInTheOneProject from './Using the two Viewer in the One Project.vue';
import GetModifiedDashboardFromTheDesigner from './Get a modified Dashboard from the Designer.vue';
import UsingTheRightToLeftModeInTheViewer from './Using the Right-To-Left Mode in the Viewer.vue';

import HowToActivateTheProduct from './How to Activate the Product.vue';
import UsingReportVariablesInCode from './Using Dashboard Variables in Code.vue';
import CreatingDashboardAtRuntime from './Creating Dashboard at Runtime.vue';

import ListSamples from './ListSamples.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListSamples },

        { path: '/Localizing_the_Designer', component: LocalizingTheDesigner },
        { path: '/Localizing_the_Viewer', component: LocalizingTheViewer },
        { path: '/Globalizing_Dashboard', component: GlobalizingDashboard },

        { path: '/Using_Custom_Font', component: UsingCustomFont },
        { path: '/Adding_a_Font_to_the_Resource', component: AddingFontToTheResource },

        { path: '/Printing_the_Dashboard_from_Code', component: PrintingTheDashboardFromCode },
        { path: '/Exporting_a_Dashboard_to_PDF', component: ExportingDashboardToPDF },
        { path: '/Exporting_a_Dashboard_to_HTML', component: ExportingDashboardToHTML },
        { path: '/Exporting_a_Dashboard_from_Code_with_Changing_Export_Settings', component: ExportingDashboardFromCodeWithChangingExportSettings },

        { path: '/Creating_a_new_Data_Connection_from_code', component: CreatingNewDataConnectionFromCode },
        { path: '/Registering_Data_from_Code', component: RegisteringDataFromCode },
        { path: '/Using_SQL_Data_Sources', component: UsingSqlDataSources },
        { path: '/Using_Parameters_in_SQL_Query', component: UsingParametersInSqlQuery },
        { path: '/Using_a_Custom_Data_Adapter', component: UsingCustomDataAdapter },
        { path: '/Supply_Custom_Headers_for_JSON_Database', component: SupplyCustomHeadersForJsonDatabase },

        { path: '/Customizing_the_Designer', component: CustomizingTheDesigner },
        { path: '/Changing_the_Designer_Theme', component: ChangingTheDesignerTheme },
        { path: '/Customizing_the_Viewer', component: CustomizingTheViewer },
        { path: '/Changing_the_Viewer_Theme', component: ChangingTheViewerTheme },
        { path: '/Using_Designer_Events', component: UsingDesignerEvents },
        { path: '/Using_Viewer_Events', component: UsingViewerEvents },
        { path: '/Working_with_onDesign_and_onExit_Events', component: WorkingWithOnDesignAndOnExitEvents },
        { path: '/Using_the_two_Viewer_in_the_One_Project', component: UsingTheTwoViewerInTheOneProject },
        { path: '/Get_a_modified_Dashboard_from_the_Designer', component: GetModifiedDashboardFromTheDesigner },
        { path: '/Using_the_Right-To-Left_Mode_in_the_Viewer', component: UsingTheRightToLeftModeInTheViewer },

        { path: '/How_to_Activate_the_Product', component: HowToActivateTheProduct },
        { path: '/Using_Dashboard_Variables_in_Code', component: UsingReportVariablesInCode },
        { path: '/Creating_Dashboard_at_Runtime', component: CreatingDashboardAtRuntime }
    ]
})

createApp(App)
    .use(router)
    .mount('#app');

