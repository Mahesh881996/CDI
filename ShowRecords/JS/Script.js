View_CDI = {
    vars: {
        View_CDI: []
    },
    fn: {}
};
View_CDI.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
View_CDI.vars.CDIList = "Critical_Data_Inventory_CDI";
View_CDI.vars.CDIData = [];
View_CDI.vars.ColumnOptions = [
    {
        "mData": "ID",
        "title": "ID"
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
        "mData": "CompleteAddress",
        "title": "Complete Address",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        }
    },
    {
        "mData": "Location",
        "title": "Location",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        }
    },
    {
        "mData": "State",
        "title": "State",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        }
    },
    {
        "mData": "Country",
        "title": "Country",
        "render": function (data, type, row) {
            return View_CDI.fn.splitData(data);
        }
    },
    {
        "mData": "BusinessFunction",
        "title": "Business Function"
    },
    {
        "mData": "BusinessProcess",
        "title": "Business Process"
    },
    {
        "mData": "DataItem",
        "title": "Data Item"
    },
    {
        "mData": "DataDescription",
        "title": "Data Description"
    },
    {
        "mData": "ProcessOwner",
        "title": "Process Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        }
    },
    {
        "mData": "DataOwner",
        "title": "Data Owner"
    },
    {
        "mData": "DataReviewer",
        "title": "Data Reviewer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        }
    },
    {
        "mData": "DataCustodian",
        "title": "Data Custodian",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        }
    },
    {
        "mData": "Confidentiality",
        "title": "Confidentialityn"
    },
    {
        "mData": "Availability",
        "title": "Availability"
    },
    {
        "mData": "RiskType",
        "title": "Risk Type",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "Integrity",
        "title": "Integrity"
    },
    {
        "mData": "SensitivityTiming",
        "title": "Sensitivity Timing"
    },
    {
        "mData": "DataCreation",
        "title": "Data Creation"
    },
    {
        "mData": "DataSourceCategory",
        "title": "DataSource Category"
    },
    {
        "mData": "DataFormat",
        "title": "Data Format",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "ModeofCollection",
        "title": "Mode of Collection",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "FinancialInformation",
        "title": "Financial Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "ProprietaryBusinessInformation",
        "title": "Proprietary Business Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "LegalAndRegulatoryData",
        "title": "Legal And Regulatory Data",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },

    {
        "mData": "LegalAndRegulatoryRequirement",
        "title": "LegalAndRegulatoryRequirement",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },

    {
        "mData": "PersonalData",
        "title": "Personal Data"
    },

    {
        "mData": "PersonalDataDescription",
        "title": "Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },

    {
        "mData": "SensitivePersonalData",
        "title": "Sensitive Personal Data"
    },
    {
        "mData": "SensitivePersonalDataDescription",
        "title": "Sensitive Personal Data Description",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "PhysicalLocationOfSource",
        "title": "Physical Location Of Source",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "ForInternalTransferOf_x0020_Data",
        "title": "For Internal Transfer Of Data Destination"
    },
    {
        "mData": "PrivacyNotice",
        "title": "Privacy Notice"
    },
    {
        "mData": "DataProtectionOfficer",
        "title": "Data Protection Officer"
    },
    {
        "mData": "InfoShared",
        "title": "Is information shared with other parties?"
    },
    {
        "mData": "DataProcessor",
        "title": "Data Processor"
    },
    {
        "mData": "DataProcessorDetails",
        "title": "Data Processor Details"
    },
    {
        "mData": "ModeofTransfer",
        "title": "Modeof Transfer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "PurposesforProcessing",
        "title": "Purposes for Processing",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "RecipientsOfTransferredData",
        "title": "Recipients Of Transferred Data"
    },
    {
        "mData": "LocationDestinationofTransferred",
        "title": "Location Destination of Transferred",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "DataTransferredOutsidetheEU",
        "title": "Data Transferred Outside the EU",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "StandardContractualClauses",
        "title": "Standard Contractual Clauses"
    },
    {
        "mData": "DataProtectionClauses",
        "title": "Data Protection Clauses"
    },
    {
        "mData": "ExistenceofThirdPartyContract",
        "title": "Existence of Third Party Contract"
    },
    {
        "mData": "ContractSignatoryfromtheEntity",
        "title": "Contract Signatory from the Entity"
    },
    {
        "mData": "Internet",
        "title": "Internet"
    },
    {
        "mData": "Employees",
        "title": "Employees"
    },
    {
        "mData": "DoverOperatingCompaniesAffiliate",
        "title": "Dover Operating Companies Affiliate"
    },
    {
        "mData": "DataAtRest",
        "title": "Data At Rest",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "DataInTransit",
        "title": "Data-In-Transit",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "Copies",
        "title": "Copies"
    },
    {
        "mData": "NetworkDrivePath",
        "title": "Network Drive Path"
    },
    {
        "mData": "ModeOfStorage",
        "title": "Mode Of Storage"
    },
    {
        "mData": "FileServerOwner",
        "title": "File Server Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        }
    },
    {
        "mData": "DataRetentionPeriod",
        "title": "Data Retention Period"
    },
    {
        "mData": "DestinationLocationOfInformation",
        "title": "Destination Location Of Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "ArchivalDestructionMechanism",
        "title": "Archival Destruction Mechanism"
    },
    {
        "mData": "ActiveInactiveData",
        "title": "Active Inactive Data"
    },
    {
        "mData": "ArchivalLocation",
        "title": "ArchivalLocation"
    },
    {
        "mData": "DataItemID",
        "title": "Data Item ID"
    },
    {
        "mData": "ContractualInformation",
        "title": "Contractual Information",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }
    },
    {
        "mData": "SharePointOneDrivePath",
        "title": "SharePoint OneDrive Path"
    },
    {
        "mData": "ProcessOfDataRetention",
        "title": "Process Of Data Retention"
    },
    {
        "mData": "DataDisposal",
        "title": "DataDisposal"
    },
    {
        "mData": "ThirdPartyDetails",
        "title": "ThirdPartyDetails"
    },
    {
        "mData": "SystemsApplications",
        "title": "Systems/Applications"
    },
    {
        "mData": "FormShared",
        "title": "FormShared"
    },
    {
        "mData": "DraftSubmissionStatus",
        "title": "Draft Submission Status"
    },
    {
        "mData": "FinalSubmissionStatus",
        "title": "Final Submission Status"
    },
    {
        "mData": "OneDrivePath",
        "title": "OneDrivePath"
    }
];
$(document).ready(function () {
    setTimeout(
        function () {
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
    View_CDI.fn.InitiateLoadFunctions();
});

View_CDI.fn.showPopup = function (ID) {
        var URL = "https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/Lists/Critical_Data_Inventory_CDI/DispForm.aspx?ID=" + ID
        $('#viewIFrame').attr("src",URL);
        $('#myModal').modal({show:true})
}

View_CDI.fn.InitiateLoadFunctions = function () {
    var query = "?$select=*,ThirdPartyDetails,SystemsApplications,ProcessOwner/EMail,ProcessOwner/Id,DataReviewer/EMail,DataCustodian/EMail,FileServerOwner/EMail&$top=5000&$orderby=Created desc&$expand=ProcessOwner,DataReviewer,DataCustodian,FileServerOwner&$filter=ProcessOwner/Id eq '" + InjectScript.vars.currentUserId + "'";
    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.CDIList, query, true).done(function (data) {
        $('.loader').fadeOut();
        var exportName = new Date().toLocaleDateString() + "Your CDI Export";
        $('#yourCDI').DataTable({
            "autoWidth": false,
            "aaData": data,
            "aoColumns": View_CDI.vars.ColumnOptions,
            "ordering": false
        });
    });
    $('.buttons-csv').removeClass("buttons-html5 dt-button").html('<i class="fa fa-file-csv" title="Export to CSV"/>')
    $('.buttons-excel').removeClass("buttons-html5 dt-button").html('<i class="fa fa-file-excel" title="Export to Excel"/>')
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