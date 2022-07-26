View_CDI = {
    vars: {
        View_CDI: []
    },
    fn: {}
};
View_CDI.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
View_CDI.vars.CDIList = "Critical_Data_Inventory_CDI";
View_CDI.vars.shareList = "CDI_Share";
View_CDI.vars.sharedHistory = [];
View_CDI.vars.allsharedHistory = [];
View_CDI.vars.CDIData = [];
View_CDI.vars.draftData = [];
View_CDI.vars.completedData = [];
View_CDI.vars.myCDIData = [];
View_CDI.vars.allCDIData = [];
View_CDI.vars.selectedItems = [];
View_CDI.vars.allselectedItems = [];
View_CDI.vars.myDraftTable;
View_CDI.vars.allDraftTable;
View_CDI.vars.sharedTable;
View_CDI.vars.reshareItemId = "";
View_CDI.vars.reshareCDIItemId = "";
View_CDI.vars.powerAppURL = "https://apps.powerapps.com/play/6babbba8-425f-46a4-9b56-1012e4356e0c?tenantId=3d2d2b6f-061a-48b6-b4b3-9312d687e3a1"
View_CDI.vars.SharedHistoryColumns = [{
    "mData": "Id",
    "title": "Select",
    "visible": false
},
{
    "mData": "DataItemID",
    "title": "Data Item ID"
},
{
    "mData": "SharedOn",
    "title": "Last Shared On"
},
{
    "mData": "SharedWith",
    "title": "Shared With"
}
]
View_CDI.vars.draftColumnOptions = [
    {
        "mData": "ID",
        "title": "Select",
        "className": "text-center",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.sharedHistory, function (val) { return val.DataItemID == row.DataItemID });
            if ((_.filter(View_CDI.vars.sharedHistory, function (data) { return data.DataItemID == row.DataItemID })).length > 0) {
                return '<i class="fa-solid fa-retweet" id="reassign" title="Re-share to User" CDIId="' + data + '" itemId="' + filteredData[0].Id + '"></i>'
            }
            else {
                return "<input type='checkbox' class='tableCheckBox' itemId='" + data + "'/>"
            }
        },
    },
    {
        "title": "Edit",
        "render": function (data, type, row) {
            return '<a target="_blank" href="'+View_CDI.vars.powerAppURL+'&User=Admin&Id='+row.Id+'"><i style="font-size:16px;" class="fa fa-edit"></i></a>'
        },
        "className": "text-center"
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
    },
    {
        "mData": "Segment",
        "title": "Segment"
    },
    {
        "mData": "OperatingCompany",
        "title": "Operating Company"
    },
    {
        "mData": "SubOperatingCompany",
        "title": "SubOperating Company"
    },
    {
        "title": "Shared User Name",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.sharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedWith == undefined ? "" : filteredData[0].SharedWith
            }
            else {
                return ""
            }
        }
    },
    {
        "title": "Shared On",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.sharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedOn== undefined ? "" : filteredData[0].SharedOn
            }
            else {
                return ""
            }
        }
    },
    
    {
        "mData": "CompleteAddress",
        "title": "Complete Address",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Location",
        "title": "Location",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "State",
        "title": "State",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Country",
        "title": "Country",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "BusinessFunction",
        "title": "Business Function",
    },
    {
        "mData": "BusinessProcess",
        "title": "Business Process",
        "visible": false
    },
    {
        "mData": "DataItem",
        "title": "Data Item",
    },
    {
        "mData": "DataDescription",
        "title": "Data Description",
        "visible": false
    },
    {
        "mData": "ProcessOwner",
        "title": "Process Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataOwner",
        "title": "Data Owner",
        "visible": false
    },
    {
        "mData": "DataReviewer",
        "title": "Data Reviewer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataCustodian",
        "title": "Data Custodian",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "Confidentiality",
        "title": "Confidentialityn",
        "visible": false
    },
    {
        "mData": "Availability",
        "title": "Availability",
        "visible": false
    },
    {
        "mData": "RiskType",
        "title": "Risk Type",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Integrity",
        "title": "Integrity",
        "visible": false
    },
    {
        "mData": "SensitivityTiming",
        "title": "Sensitivity Timing",
        "visible": false
    },
    {
        "mData": "DataCreation",
        "title": "Data Creation",
        "visible": false
    },
    {
        "mData": "DataSourceCategory",
        "title": "DataSource Category",
        "visible": false
    },
    {
        "mData": "DataFormat",
        "title": "Data Format",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ModeofCollection",
        "title": "Mode of Collection",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "FinancialInformation",
        "title": "Financial Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ProprietaryBusinessInformation",
        "title": "Proprietary Business Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "LegalAndRegulatoryData",
        "title": "Legal And Regulatory Data",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "LegalAndRegulatoryRequirement",
        "title": "LegalAndRegulatoryRequirement",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "PersonalData",
        "title": "Personal Data",
        "visible": false
    },

    {
        "mData": "PersonalDataDescription",
        "title": "Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "SensitivePersonalData",
        "title": "Sensitive Personal Data",
        "visible": false
    },
    {
        "mData": "SensitivePersonalDataDescription",
        "title": "Sensitive Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PhysicalLocationOfSource",
        "title": "Physical Location Of Source",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ForInternalTransferOf_x0020_Data",
        "title": "For Internal Transfer Of Data Destination",
        "visible": false
    },
    {
        "mData": "PrivacyNotice",
        "title": "Privacy Notice",
        "visible": false
    },
    {
        "mData": "DataProtectionOfficer",
        "title": "Data Protection Officer",
        "visible": false
    },
    {
        "mData": "InfoShared",
        "title": "Is information shared with other parties?",
        "visible": false
    },
    {
        "mData": "DataProcessor",
        "title": "Data Processor",
        "visible": false
    },
    {
        "mData": "DataProcessorDetails",
        "title": "Data Processor Details",
        "visible": false
    },
    {
        "mData": "ModeofTransfer",
        "title": "Modeof Transfer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PurposesforProcessing",
        "title": "Purposes for Processing",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "RecipientsOfTransferredData",
        "title": "Recipients Of Transferred Data",
        "visible": false
    },
    {
        "mData": "LocationDestinationofTransferred",
        "title": "Location Destination of Transferred",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataTransferredOutsidetheEU",
        "title": "Data Transferred Outside the EU",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "StandardContractualClauses",
        "title": "Standard Contractual Clauses",
        "visible": false
    },
    {
        "mData": "DataProtectionClauses",
        "title": "Data Protection Clauses",
        "visible": false
    },
    {
        "mData": "ExistenceofThirdPartyContract",
        "title": "Existence of Third Party Contract",
        "visible": false
    },
    {
        "mData": "ContractSignatoryfromtheEntity",
        "title": "Contract Signatory from the Entity",
        "visible": false
    },
    {
        "mData": "Internet",
        "title": "Internet",
        "visible": false
    },
    {
        "mData": "Employees",
        "title": "Employees",
        "visible": false
    },
    {
        "mData": "DoverOperatingCompaniesAffiliate",
        "title": "Dover Operating Companies Affiliate",
        "visible": false
    },
    {
        "mData": "DataAtRest",
        "title": "Data At Rest",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataInTransit",
        "title": "Data-In-Transit",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Copies",
        "title": "Copies",
        "visible": false
    },
    {
        "mData": "NetworkDrivePath",
        "title": "Network Drive Path",
        "visible": false
    },
    {
        "mData": "ModeOfStorage",
        "title": "Mode Of Storage",
        "visible": false
    },
    {
        "mData": "FileServerOwner",
        "title": "File Server Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataRetentionPeriod",
        "title": "Data Retention Period",
        "visible": false
    },
    {
        "mData": "DestinationLocationOfInformation",
        "title": "Destination Location Of Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ArchivalDestructionMechanism",
        "title": "Archival Destruction Mechanism",
        "visible": false
    },
    {
        "mData": "ActiveInactiveData",
        "title": "Active Inactive Data",
        "visible": false
    },
    {
        "mData": "ArchivalLocation",
        "title": "ArchivalLocation",
        "visible": false
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
        "visible": false
    },
    {
        "mData": "ContractualInformation",
        "title": "Contractual Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "SharePointOneDrivePath",
        "title": "SharePoint OneDrive Path",
        "visible": false
    },
    {
        "mData": "ProcessOfDataRetention",
        "title": "Process Of Data Retention",
        "visible": false
    },
    {
        "mData": "DataDisposal",
        "title": "DataDisposal",
        "visible": false
    },
    {
        "mData": "ThirdPartyDetails",
        "title": "ThirdPartyDetails",
        "visible": false
    },
    {
        "mData": "SystemsApplications",
        "title": "Systems/Applications",
        "visible": false
    },
    {
        "mData": "FormShared",
        "title": "FormShared",
        "visible": false
    },
    {
        "mData": "DraftSubmissionStatus",
        "title": "Draft Submission Status",
        "visible": false
    },
    {
        "mData": "FinalSubmissionStatus",
        "title": "Final Submission Status",
        "visible": false
    },
    {
        "mData": "OneDrivePath",
        "title": "OneDrivePath",
        "visible": false
    }
];
View_CDI.vars.allColumnOptions = [
    {
        "mData": "ID",
        "title": "Select",
        "className": "text-center",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (val) { return val.DataItemID == row.DataItemID });
            if (filteredData.length > 0) {
                return '<i class="fa-solid fa-retweet" id="reassign" title="Re-share to User" CDIId="' + data + '" itemId="' + filteredData[0].Id + '"></i>'
            }
            else {
                return "<input type='checkbox' class='alltableCheckBox' itemId='" + data + "'/>"
            }
        },
    },
    {
        "title": "Edit",
        "render": function (data, type, row) {
            return '<a target="_blank" href="'+View_CDI.vars.powerAppURL+'&User=Admin&Id='+row.Id+'"><i style="font-size:16px;" class="fa fa-edit"></i></a>'
        },
        "className": "text-center"
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
    },
    {
        "mData": "Segment",
        "title": "Segment"
    },
    {
        "mData": "OperatingCompany",
        "title": "Operating Company"
    },
    {
        "mData": "SubOperatingCompany",
        "title": "SubOperating Company"
    },
    {
        "title": "Shared User Name",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedWith
            }
            else {
                return ""
            }
        }
    },
    {
        "title": "Shared On",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedOn
            }
            else {
                return ""
            }
        }
    },
    {
        "title": "Admin Assigned",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].Admin;
            }
            else {
                return ""
            }
        }
    },
    
    {
        "mData": "CompleteAddress",
        "title": "Complete Address",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Location",
        "title": "Location",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "State",
        "title": "State",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Country",
        "title": "Country",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "BusinessFunction",
        "title": "Business Function",
    },
    {
        "mData": "BusinessProcess",
        "title": "Business Process",
        "visible": false
    },
    {
        "mData": "DataItem",
        "title": "Data Item",
    },
    {
        "mData": "DataDescription",
        "title": "Data Description",
        "visible": false
    },
    {
        "mData": "ProcessOwner",
        "title": "Process Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataOwner",
        "title": "Data Owner",
        "visible": false
    },
    {
        "mData": "DataReviewer",
        "title": "Data Reviewer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataCustodian",
        "title": "Data Custodian",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "Confidentiality",
        "title": "Confidentialityn",
        "visible": false
    },
    {
        "mData": "Availability",
        "title": "Availability",
        "visible": false
    },
    {
        "mData": "RiskType",
        "title": "Risk Type",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Integrity",
        "title": "Integrity",
        "visible": false
    },
    {
        "mData": "SensitivityTiming",
        "title": "Sensitivity Timing",
        "visible": false
    },
    {
        "mData": "DataCreation",
        "title": "Data Creation",
        "visible": false
    },
    {
        "mData": "DataSourceCategory",
        "title": "DataSource Category",
        "visible": false
    },
    {
        "mData": "DataFormat",
        "title": "Data Format",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ModeofCollection",
        "title": "Mode of Collection",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "FinancialInformation",
        "title": "Financial Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ProprietaryBusinessInformation",
        "title": "Proprietary Business Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "LegalAndRegulatoryData",
        "title": "Legal And Regulatory Data",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "LegalAndRegulatoryRequirement",
        "title": "LegalAndRegulatoryRequirement",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "PersonalData",
        "title": "Personal Data",
        "visible": false
    },

    {
        "mData": "PersonalDataDescription",
        "title": "Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "SensitivePersonalData",
        "title": "Sensitive Personal Data",
        "visible": false
    },
    {
        "mData": "SensitivePersonalDataDescription",
        "title": "Sensitive Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PhysicalLocationOfSource",
        "title": "Physical Location Of Source",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ForInternalTransferOf_x0020_Data",
        "title": "For Internal Transfer Of Data Destination",
        "visible": false
    },
    {
        "mData": "PrivacyNotice",
        "title": "Privacy Notice",
        "visible": false
    },
    {
        "mData": "DataProtectionOfficer",
        "title": "Data Protection Officer",
        "visible": false
    },
    {
        "mData": "InfoShared",
        "title": "Is information shared with other parties?",
        "visible": false
    },
    {
        "mData": "DataProcessor",
        "title": "Data Processor",
        "visible": false
    },
    {
        "mData": "DataProcessorDetails",
        "title": "Data Processor Details",
        "visible": false
    },
    {
        "mData": "ModeofTransfer",
        "title": "Modeof Transfer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PurposesforProcessing",
        "title": "Purposes for Processing",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "RecipientsOfTransferredData",
        "title": "Recipients Of Transferred Data",
        "visible": false
    },
    {
        "mData": "LocationDestinationofTransferred",
        "title": "Location Destination of Transferred",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataTransferredOutsidetheEU",
        "title": "Data Transferred Outside the EU",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "StandardContractualClauses",
        "title": "Standard Contractual Clauses",
        "visible": false
    },
    {
        "mData": "DataProtectionClauses",
        "title": "Data Protection Clauses",
        "visible": false
    },
    {
        "mData": "ExistenceofThirdPartyContract",
        "title": "Existence of Third Party Contract",
        "visible": false
    },
    {
        "mData": "ContractSignatoryfromtheEntity",
        "title": "Contract Signatory from the Entity",
        "visible": false
    },
    {
        "mData": "Internet",
        "title": "Internet",
        "visible": false
    },
    {
        "mData": "Employees",
        "title": "Employees",
        "visible": false
    },
    {
        "mData": "DoverOperatingCompaniesAffiliate",
        "title": "Dover Operating Companies Affiliate",
        "visible": false
    },
    {
        "mData": "DataAtRest",
        "title": "Data At Rest",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataInTransit",
        "title": "Data-In-Transit",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Copies",
        "title": "Copies",
        "visible": false
    },
    {
        "mData": "NetworkDrivePath",
        "title": "Network Drive Path",
        "visible": false
    },
    {
        "mData": "ModeOfStorage",
        "title": "Mode Of Storage",
        "visible": false
    },
    {
        "mData": "FileServerOwner",
        "title": "File Server Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataRetentionPeriod",
        "title": "Data Retention Period",
        "visible": false
    },
    {
        "mData": "DestinationLocationOfInformation",
        "title": "Destination Location Of Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ArchivalDestructionMechanism",
        "title": "Archival Destruction Mechanism",
        "visible": false
    },
    {
        "mData": "ActiveInactiveData",
        "title": "Active Inactive Data",
        "visible": false
    },
    {
        "mData": "ArchivalLocation",
        "title": "ArchivalLocation",
        "visible": false
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
        "visible": false
    },
    {
        "mData": "ContractualInformation",
        "title": "Contractual Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "SharePointOneDrivePath",
        "title": "SharePoint OneDrive Path",
        "visible": false
    },
    {
        "mData": "ProcessOfDataRetention",
        "title": "Process Of Data Retention",
        "visible": false
    },
    {
        "mData": "DataDisposal",
        "title": "DataDisposal",
        "visible": false
    },
    {
        "mData": "ThirdPartyDetails",
        "title": "ThirdPartyDetails",
        "visible": false
    },
    {
        "mData": "SystemsApplications",
        "title": "Systems/Applications",
        "visible":false
    },
    {
        "mData": "FormShared",
        "title": "FormShared",
        "visible": false
    },
    {
        "mData": "DraftSubmissionStatus",
        "title": "Draft Submission Status",
        "visible": false
    },
    {
        "mData": "FinalSubmissionStatus",
        "title": "Final Submission Status",
        "visible": false
    },
    {
        "mData": "OneDrivePath",
        "title": "OneDrivePath",
        "visible": false
    }
];
View_CDI.vars.allCompletedOptions = [
    {
        "mData": "ID",
        "title": "Select",
        "className": "text-center",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (val) { return val.DataItemID == row.DataItemID });
            if (filteredData.length > 0) {
                return '<i class="fa-solid fa-retweet" id="reassign" title="Re-share to User" CDIId="' + data + '" itemId="' + filteredData[0].Id + '"></i>'
            }
            else {
                return "<input type='checkbox' class='alltableCheckBox' itemId='" + data + "'/>"
            }
        },
        "visible": false
    },
    {
        "title": "Edit",
        "render": function (data, type, row) {
            return '<a target="_blank" href="'+View_CDI.vars.powerAppURL+'&User=Admin&Id='+row.Id+'"><i style="font-size:16px;" class="fa fa-edit"></i></a>'
        },
        "className": "text-center"
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
    },
    {
        "mData": "Segment",
        "title": "Segment"
    },
    {
        "mData": "OperatingCompany",
        "title": "Operating Company"
    },
    {
        "mData": "SubOperatingCompany",
        "title": "SubOperating Company"
    },
    {
        "title": "Shared User Name",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedWith
            }
            else {
                return ""
            }
        },
        "visible": false
    },
    {
        "title": "Shared On",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].SharedOn
            }
            else {
                return ""
            }
        },
        "visible": false
    },
    {
        "title": "Admin Assigned",
        "render": function (data, type, row) {
            var filteredData = _.filter(View_CDI.vars.allsharedHistory, function (data) { return data.DataItemID == row.DataItemID });
            if ((filteredData).length > 0) {
                return filteredData[0].Admin;
            }
            else {
                return ""
            }
        },
        "visible": false
    },
    
    {
        "mData": "CompleteAddress",
        "title": "Complete Address",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Location",
        "title": "Location",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "State",
        "title": "State",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "Country",
        "title": "Country",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        },
        "visible": false
    },
    {
        "mData": "BusinessFunction",
        "title": "Business Function",
    },
    {
        "mData": "BusinessProcess",
        "title": "Business Process",
        "visible": false
    },
    {
        "mData": "DataItem",
        "title": "Data Item",
    },
    {
        "mData": "DataDescription",
        "title": "Data Description",
        "visible": false
    },
    {
        "mData": "ProcessOwner",
        "title": "Process Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataOwner",
        "title": "Data Owner",
        "visible": false
    },
    {
        "mData": "DataReviewer",
        "title": "Data Reviewer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataCustodian",
        "title": "Data Custodian",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "Confidentiality",
        "title": "Confidentialityn",
        "visible": false
    },
    {
        "mData": "Availability",
        "title": "Availability",
        "visible": false
    },
    {
        "mData": "RiskType",
        "title": "Risk Type",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Integrity",
        "title": "Integrity",
        "visible": false
    },
    {
        "mData": "SensitivityTiming",
        "title": "Sensitivity Timing",
        "visible": false
    },
    {
        "mData": "DataCreation",
        "title": "Data Creation",
        "visible": false
    },
    {
        "mData": "DataSourceCategory",
        "title": "DataSource Category",
        "visible": false
    },
    {
        "mData": "DataFormat",
        "title": "Data Format",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ModeofCollection",
        "title": "Mode of Collection",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "FinancialInformation",
        "title": "Financial Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ProprietaryBusinessInformation",
        "title": "Proprietary Business Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "LegalAndRegulatoryData",
        "title": "Legal And Regulatory Data",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "LegalAndRegulatoryRequirement",
        "title": "LegalAndRegulatoryRequirement",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "PersonalData",
        "title": "Personal Data",
        "visible": false
    },

    {
        "mData": "PersonalDataDescription",
        "title": "Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "SensitivePersonalData",
        "title": "Sensitive Personal Data",
        "visible": false
    },
    {
        "mData": "SensitivePersonalDataDescription",
        "title": "Sensitive Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PhysicalLocationOfSource",
        "title": "Physical Location Of Source",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ForInternalTransferOf_x0020_Data",
        "title": "For Internal Transfer Of Data Destination",
        "visible": false
    },
    {
        "mData": "PrivacyNotice",
        "title": "Privacy Notice",
        "visible": false
    },
    {
        "mData": "DataProtectionOfficer",
        "title": "Data Protection Officer",
        "visible": false
    },
    {
        "mData": "InfoShared",
        "title": "Is information shared with other parties?",
        "visible": false
    },
    {
        "mData": "DataProcessor",
        "title": "Data Processor",
        "visible": false
    },
    {
        "mData": "DataProcessorDetails",
        "title": "Data Processor Details",
        "visible": false
    },
    {
        "mData": "ModeofTransfer",
        "title": "Modeof Transfer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "PurposesforProcessing",
        "title": "Purposes for Processing",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "RecipientsOfTransferredData",
        "title": "Recipients Of Transferred Data",
        "visible": false
    },
    {
        "mData": "LocationDestinationofTransferred",
        "title": "Location Destination of Transferred",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataTransferredOutsidetheEU",
        "title": "Data Transferred Outside the EU",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "StandardContractualClauses",
        "title": "Standard Contractual Clauses",
        "visible": false
    },
    {
        "mData": "DataProtectionClauses",
        "title": "Data Protection Clauses",
        "visible": false
    },
    {
        "mData": "ExistenceofThirdPartyContract",
        "title": "Existence of Third Party Contract",
        "visible": false
    },
    {
        "mData": "ContractSignatoryfromtheEntity",
        "title": "Contract Signatory from the Entity",
        "visible": false
    },
    {
        "mData": "Internet",
        "title": "Internet",
        "visible": false
    },
    {
        "mData": "Employees",
        "title": "Employees",
        "visible": false
    },
    {
        "mData": "DoverOperatingCompaniesAffiliate",
        "title": "Dover Operating Companies Affiliate",
        "visible": false
    },
    {
        "mData": "DataAtRest",
        "title": "Data At Rest",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "DataInTransit",
        "title": "Data-In-Transit",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "Copies",
        "title": "Copies",
        "visible": false
    },
    {
        "mData": "NetworkDrivePath",
        "title": "Network Drive Path",
        "visible": false
    },
    {
        "mData": "ModeOfStorage",
        "title": "Mode Of Storage",
        "visible": false
    },
    {
        "mData": "FileServerOwner",
        "title": "File Server Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },
    {
        "mData": "DataRetentionPeriod",
        "title": "Data Retention Period",
        "visible": false
    },
    {
        "mData": "DestinationLocationOfInformation",
        "title": "Destination Location Of Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "ArchivalDestructionMechanism",
        "title": "Archival Destruction Mechanism",
        "visible": false
    },
    {
        "mData": "ActiveInactiveData",
        "title": "Active Inactive Data",
        "visible": false
    },
    {
        "mData": "ArchivalLocation",
        "title": "ArchivalLocation",
        "visible": false
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID",
        "visible": false
    },
    {
        "mData": "ContractualInformation",
        "title": "Contractual Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },
    {
        "mData": "SharePointOneDrivePath",
        "title": "SharePoint OneDrive Path",
        "visible": false
    },
    {
        "mData": "ProcessOfDataRetention",
        "title": "Process Of Data Retention",
        "visible": false
    },
    {
        "mData": "DataDisposal",
        "title": "DataDisposal",
        "visible": false
    },
    {
        "mData": "ThirdPartyDetails",
        "title": "ThirdPartyDetails",
        "visible": false
    },
    {
        "mData": "SystemsApplications",
        "title": "Systems/Applications",
        "visible":false
    },
    {
        "mData": "FormShared",
        "title": "FormShared",
        "visible": false
    },
    {
        "mData": "DraftSubmissionStatus",
        "title": "Draft Submission Status",
        "visible": false
    },
    {
        "mData": "FinalSubmissionStatus",
        "title": "Final Submission Status",
        "visible": false
    },
    {
        "mData": "OneDrivePath",
        "title": "OneDrivePath",
        "visible": false
    }
];

$(document).ready(function () {
    setTimeout(
        function () {
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
    $("#tabs").tabs();
    View_CDI.fn.getShardHistory();
    View_CDI.fn.InitiateLoadFunctions();
    View_CDI.fn.initializePeoplePicker("UserNameField");
    View_CDI.fn.initializePeoplePicker("allUserNameField");
});

View_CDI.fn.showPopup = function (ID) {
    var URL = "https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/Lists/Critical_Data_Inventory_CDI/DispForm.aspx?ID=" + ID
    $('#viewIFrame').attr("src", URL);
    $('#myModal').modal({ show: true })
}

View_CDI.fn.getShardHistory = function () {
    // InjectScript.vars.currentUserId = 17;
    var query = "?$select=*,CDI/DataItemID,User_x0020_Name/EMail,Author/EMail&$expand=CDI,User_x0020_Name,Author&$top=5000&$orderby=Modified desc"
    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.shareList, query, true).done(function (data) {
        _.forEach(data, function (val) {
            if(val.AuthorId == InjectScript.vars.currentUserId){
                View_CDI.vars.sharedHistory.push({
                    "DataItemID": val.CDI.DataItemID,
                    "SharedOn": moment(val.Modified).format("DD/MM/YYYY HH:mm:ss"),
                    "SharedWith": val.User_x0020_Name.EMail,
                    "Id": val.Id,
                    "Admin": val.Author.EMail
                });
            }
        });

        _.forEach(data, function (val) {
            View_CDI.vars.allsharedHistory.push({
                "DataItemID": val.CDI.DataItemID,
                "SharedOn": moment(val.Modified).format("DD/MM/YYYY HH:mm:ss"),
                "SharedWith": val.User_x0020_Name.EMail,
                "Id": val.Id,
                "Admin": val.Author.EMail
            });
        })
    });

    if ($.fn.dataTable.isDataTable('#shareData')) {
        View_CDI.vars.sharedTable.destroy();
    }
    View_CDI.vars.sharedTable = $('#shareData').DataTable({
        "autoWidth": false,
        "aaData": View_CDI.vars.sharedHistory,
        "aoColumns": View_CDI.vars.SharedHistoryColumns,
        "oLanguage": {
            "sEmptyTable": "No Sharing history available"
        },
        searching: false,
        "ordering": false
    });
}

View_CDI.fn.InitiateLoadFunctions = function () {
    var query = "?$select=*,ThirdPartyDetails,SystemsApplications,ProcessOwner/EMail,ProcessOwner/Id,DataReviewer/EMail,DataCustodian/EMail,FileServerOwner/EMail,Author/Id&$top=5000&$orderby=Created desc&$expand=ProcessOwner,DataReviewer,DataCustodian,FileServerOwner,Author";
    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.CDIList, query, true).done(function (data) {
        View_CDI.vars.CDIData = data;
        View_CDI.vars.completedData = _.filter(View_CDI.vars.CDIData, function (item) {
            return item.FinalSubmissionStatus == "Final" || item.FinalSubmissionStatus == "Completed" 
        });
        View_CDI.vars.draftData = _.filter(View_CDI.vars.CDIData, function (item) {
            return item.FinalSubmissionStatus == "Pending" || item.FinalSubmissionStatus == "Draft" 
        });
        View_CDI.vars.myCDIData = _.filter(View_CDI.vars.draftData, function (item) {
            return item.AdminAssignedId == InjectScript.vars.currentUserId
        });
        View_CDI.vars.allCDIData = _.filter(View_CDI.vars.draftData, function (item) {
            return item.AdminAssignedId != InjectScript.vars.currentUserId
        });
        $('.loader').fadeOut();
        if ($.fn.dataTable.isDataTable('#myDraft')) {
            View_CDI.vars.myDraftTable.destroy();
        }
        if ($.fn.dataTable.isDataTable('#allDraft')) {
            View_CDI.vars.allDraftTable.destroy();
        }
        View_CDI.vars.myDraftTable = $('#myDraft').DataTable({
            "autoWidth": false,
            "aaData": View_CDI.vars.myCDIData,
            "aoColumns": View_CDI.vars.draftColumnOptions,
            "ordering": false
        });
        View_CDI.vars.allDraftTable = $("#allDraft").DataTable({
            "autoWidth": false,
            "aaData": View_CDI.vars.draftData,
            "aoColumns": View_CDI.vars.allColumnOptions,
            "ordering": false
        })
        View_CDI.vars.allCompletedTable = $("#allCompleted").DataTable({
            "autoWidth": false,
            "aaData": View_CDI.vars.completedData,
            "aoColumns": View_CDI.vars.allCompletedOptions,
            "ordering": false
        })
    });

    $('#allDraft .alltableCheckBox').click(function () {
        var id = parseInt($(this).attr("itemId"));
        if ($(this).is(":checked")) {
            View_CDI.vars.allselectedItems.push(_.first(_.filter(View_CDI.vars.CDIData, function (val) {
                return val.Id == id;
            })));
        }
        else {
            View_CDI.vars.allselectedItems = _.filter(View_CDI.vars.allselectedItems, function (val) {
                return val.Id != id;
            })
        }
        View_CDI.vars.allselectedItems.length > 0 ? $("#allshareButton").prop('disabled', false) : $("#allshareButton").prop('disabled', true)
    });

    $('#myDraft .tableCheckBox').click(function () {
        var id = parseInt($(this).attr("itemId"));
        if ($(this).is(":checked")) {
            View_CDI.vars.selectedItems.push(_.first(_.filter(View_CDI.vars.CDIData, function (val) {
                return val.Id == id;
            })));
        }
        else {
            View_CDI.vars.selectedItems = _.filter(View_CDI.vars.selectedItems, function (val) {
                return val.Id != id;
            })
        }
        View_CDI.vars.selectedItems.length > 0 ? $("#shareButton").prop('disabled', false) : $("#shareButton").prop('disabled', true)
    });

    $("#myDraft #reassign").click(function () {
        var id = parseInt($(this).attr("itemId"));
        var CDIId = parseInt($(this).attr("CDIId"));
        Swal.fire({
            title: 'Are you sure to re-share this Data Item to User?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            CancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                var postJson = {
                    "Status": "Re-Shared"
                }
                InjectScript.fn.updateListItem(View_CDI.vars.webUrl, View_CDI.vars.shareList, id, postJson, "", true).done(function (results) {
                    var flowData = {
                        "CDIId": CDIId,
                        "ShareId": id
                    }
                    $.ajax(
                        {
                            url: "https://prod-71.westus.logic.azure.com:443/workflows/b4b28c6b25aa406cb846df51920be373/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HQvvgOzdAx-WFdHWLR04pyjsjOCc2LCqtPUFV4DdDgM",
                            data: JSON.stringify(flowData),
                            processData: false,
                            contentType: "application/json",
                            dataType: "json",
                            type: 'POST',
                            complete: function (xhr, textStatus) {
                                if (xhr.status == '202') {
                                    Swal.fire(
                                        'Shared!',
                                        'CDI Data Item has been re-shared with user!',
                                        'success'
                                      ).then((result) => {
                                        View_CDI.fn.getShardHistory();
                                        View_CDI.fn.InitiateLoadFunctions();
                                        location.reload(true);
                                      });
                                } else {
                                    alert("Error executing Flow");
                                }
                            }
                        });

                })
            }
        })
    })

    $("#allDraft #reassign").click(function () {

        $("#allshareModal").modal("show");
        $("#popUpShareButton").hide();
        $("#popUpReShareButton").show();
        View_CDI.vars.reshareItemId = parseInt($(this).attr("itemId"));
        reshareCDIItemId = parseInt($(this).attr("CDIId"));

        // $("#popUpShareButton").text("Share");

        // var id = parseInt($(this).attr("itemId"));
        // var CDIId = parseInt($(this).attr("CDIId"));
        // Swal.fire({
        //     title: 'Are you sure to re-share this Data Item to User?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes',
        //     CancelButtonText: 'No'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         var postJson = {
        //             "Status": "Re-Shared"
        //         }
        //         InjectScript.fn.updateListItem(View_CDI.vars.webUrl, View_CDI.vars.shareList, id, postJson, "", true).done(function (results) {
        //             var flowData = {
        //                 "CDIId": CDIId,
        //                 "ShareId": id
        //             }
        //             $.ajax(
        //                 {
        //                     url: "https://prod-71.westus.logic.azure.com:443/workflows/b4b28c6b25aa406cb846df51920be373/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HQvvgOzdAx-WFdHWLR04pyjsjOCc2LCqtPUFV4DdDgM",
        //                     data: JSON.stringify(flowData),
        //                     processData: false,
        //                     contentType: "application/json",
        //                     dataType: "json",
        //                     type: 'POST',
        //                     complete: function (xhr, textStatus) {
        //                         if (xhr.status == '202') {
        //                             Swal.fire(
        //                                 'Shared!',
        //                                 'CDI Data Item has been re-shared with user!',
        //                                 'success'
        //                               ).then((result) => {
        //                                 View_CDI.fn.getShardHistory();
        //                                 View_CDI.fn.InitiateLoadFunctions();
        //                                 location.reload(true);
        //                               });
        //                         } else {
        //                             alert("Error executing Flow");
        //                         }
        //                     }
        //                 });

        //         })
        //     }
        // })
    })
}

View_CDI.fn.assignItem = function (id) {
    Swal.fire({
        title: 'Are you sure to assign this Data Item to you?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        CancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            var postJson = {
                "AdminAssignedId": InjectScript.vars.currentUserId
            }
            InjectScript.fn.updateListItem(View_CDI.vars.webUrl, View_CDI.vars.CDIList, id, postJson, "", true).done(function (results) {
                $.notify("Item shared to you successfully", "success");
                View_CDI.fn.getShardHistory();
                View_CDI.fn.InitiateLoadFunctions();
                location.reload(true);
            })
        }
    })
}

View_CDI.fn.splitData = function (data) {
    var returnData = "";
    if (data) {
        _.each(data.split(";"), function (value) {
            if (value != "" && value != ";" && value != '\r\n') {
                returnData += value + ","
            }
        })
    }
    else {
        return "";
    }
    return returnData.replace(/,(\s+)?$/, '');;
}

View_CDI.fn.GetMultiLookupData = function (data, Column) {
    var returnData = "";
    if (data.results.length > 0) {
        returnData = (_.map(data.results, function (item) {
            return item[Column];
        })).join(",")
    }
    else {
        returnData = "";
    }

    return returnData
}

View_CDI.fn.GetLookupData = function (data, Column) {
    if (data[Column]) {
        return data[Column]
    }
    else {
        return "";
    }
}

View_CDI.fn.GetPeoplePickerData = function (data) {
    if (data.EMail) {
        return data.EMail;
    }
    else {
        return "";
    }
}

View_CDI.fn.GetMultiSelectChoiceData = function (data) {
    if (data && data.results) {
        return data.results[0];
    }
    else {
        return "";
    }
}

View_CDI.fn.initializePeoplePicker = function (peoplePickerElementId) {
    var schema = {};
    schema['PrincipalAccountType'] = 'User';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = false;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = '280px';
    SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}

View_CDI.fn.shareItem = function () {
    var peoplePickerTopDivId = $('#UserNameField').children().children().attr('id');
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerTopDivId];
    var users = peoplePicker.GetAllUserInfo();
    if (users.length <= 0) {
        $.notify("User Name is required to share", "error");
    }
    else {
        Swal.fire({
            title: 'Are you sure to share selected Data Item to User',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                $("#userNameAlert").hide();
                _.forEach(View_CDI.vars.selectedItems,function(val){
                    var postJson = {
                        "User_x0020_NameId": View_CDI.fnGetUserId(users[0].Key),
                        "CDIId": val.Id,
                        "CDIInternalID": val.Id
                    }
                    InjectScript.fn.addListItem(View_CDI.vars.webUrl, View_CDI.vars.shareList, postJson, "", true).done(function (results) {
                        var postJson = {
                            "AdminAssignedId": InjectScript.vars.currentUserId
                        }
                        InjectScript.fn.updateListItem(View_CDI.vars.webUrl, View_CDI.vars.CDIList, val.Id, postJson, "", true).done(function (results) {
                        })
                    })
                });
                $.notify("Shared selected CDI's", "success");
                peoplePicker.DeleteProcessedUser();
                $('#shareModal').modal('hide');
                View_CDI.fn.getShardHistory();
                View_CDI.fn.InitiateLoadFunctions();
                location.reload(true);
                
            }
        })
    }
}

View_CDI.fn.reshareItem = function(){
    var peoplePickerTopDivId = $('#allUserNameField').children().children().attr('id');
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerTopDivId];
    var users = peoplePicker.GetAllUserInfo();
    if (users.length <= 0) {
        $.notify("User Name is required to share", "error");
    }
    else{
        Swal.fire({
            title: 'Are you sure to re-share selected Data Item to User',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                var postJSON = {
                    "User_x0020_NameId": View_CDI.fnGetUserId(users[0].Key),
                    "Status": "Re-Shared",

                }
                InjectScript.fn.updateListItem(View_CDI.vars.webUrl, View_CDI.vars.shareList,View_CDI.vars.reshareItemId, postJSON).done(function(results){
                    var flowData = {
                        "CDIId": View_CDI.varsreshareCDIItemId,
                        "ShareId": View_CDI.vars.reshareItemId
                    }
                    $.ajax(
                        {
                            url: "https://prod-71.westus.logic.azure.com:443/workflows/b4b28c6b25aa406cb846df51920be373/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HQvvgOzdAx-WFdHWLR04pyjsjOCc2LCqtPUFV4DdDgM",
                            data: JSON.stringify(flowData),
                            processData: false,
                            contentType: "application/json",
                            dataType: "json",
                            type: 'POST',
                            complete: function (xhr, textStatus) {
                                if (xhr.status == '202') {
                                    Swal.fire(
                                        'Shared!',
                                        'CDI Data Item has been re-shared with user!',
                                        'success'
                                      ).then((result) => {
                                        $("#popUpReShareButton").hide();
                                        $("#popUpShareButton").show();
                                        peoplePicker.DeleteProcessedUser();
                                        $('#allshareModal').modal('hide');
                                        View_CDI.fn.getShardHistory();
                                        View_CDI.fn.InitiateLoadFunctions();
                                        location.reload(true);
                                      });
                                } else {
                                    alert("Error executing Flow");
                                }
                            }
                        });
                })
            }
            else{
                $("#popUpReShareButton").hide();
                $("#popUpShareButton").show();
                $.notify("Re-Shared Operation Cancelled", "success");
                peoplePicker.DeleteProcessedUser();
                $('#allshareModal').modal('hide');
                View_CDI.fn.InitiateLoadFunctions();
            }
        });
    }
}

View_CDI.fn.allshareItem = function () {
    var peoplePickerTopDivId = $('#allUserNameField').children().children().attr('id');
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerTopDivId];
    var users = peoplePicker.GetAllUserInfo();
    if (users.length <= 0) {
        $.notify("User Name is required to share", "error");
    }
    else {
        Swal.fire({
            title: 'Are you sure to share selected Data Item to User',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                $("#userNameAlert").hide();
                _.forEach(View_CDI.vars.allselectedItems,function(val){
                    var postJson = {
                        "User_x0020_NameId": View_CDI.fnGetUserId(users[0].Key),
                        "CDIId": val.Id
                    }
                    InjectScript.fn.addListItem(View_CDI.vars.webUrl, View_CDI.vars.shareList, postJson, "", true).done(function (results) {
                        
                    })
                });
                $.notify("Shared selected CDI's", "success");
                peoplePicker.DeleteProcessedUser();
                $('#allshareModal').modal('hide');
                View_CDI.fn.getShardHistory();
                View_CDI.fn.InitiateLoadFunctions();
                location.reload(true);
                
            }
        })
    }
}

View_CDI.fnGetUserId = function (accountName) {
    var userId;
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;
    $.ajax({
        url: siteUrl + "/_api/web/siteusers(@v)?@v='" + encodeURIComponent(accountName) + "'",
        method: "GET",
        async: false,
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            userId = data.d.Id;
        },
        error: function (data) {
            console.log(JSON.stringify(data));
        }
    });
    return userId;
}