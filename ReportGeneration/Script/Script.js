View_CDI = {
    vars: {
        View_CDI: []
    },
    fn: {}
};
View_CDI.vars.webUrl = _spPageContextInfo.webAbsoluteUrl;
View_CDI.vars.CDIList = "Critical_Data_Inventory_CDI";
View_CDI.vars.CDIData = [];
View_CDI.vars.filteredData = [];
View_CDI.vars.filtersOrder = [];
View_CDI.vars.ColumnOptions = [
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
        "title": "Sub-Operating Company"
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
        "title": "Location/City",
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
        "title": "Business Process",
        "visible": false
    },
    {
        "mData": "DataItem",
        "title": "Data Item",
        "visible": false
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
        }
    },

    {
        "mData": "DataReviewer",
        "title": "Back Up Process Owner",
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
        "mData": "DataCreation",
        "title": "Data Creation",
        "visible": false
    },

    {
        "mData": "DataSourceCategory",
        "title": "Data Source Category",
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
        "mData": "DataAtRest",
        "title": "Data-at-Rest",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "DataInTransit",
        "title": "Data-in-Transit",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "ForInternalTransferOf_x0020_Data",
        "title": "For Internal Transfer Of Data, Destination System",
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
        "title": "Legal And Regulatory Requirement",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
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
        "mData": "Confidentiality",
        "title": "Confidentiality",
        "visible": false
    },

    {
        "mData": "Integrity",
        "title": "Integrity",
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
        "mData": "SensitivityTiming",
        "title": "Sensitivity Timing",
        "visible": false
    },



    {
        "mData": "PersonalData",
        "title": "Does the data item contain Personal data?"
    },

    {
        "mData": "PersonalDataDescription",
        "title": "Personal Data Categories",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "SensitivePersonalData",
        "title": "Does the Data Item contain Sensitive Personal Information?",
        "visible": false
    },
    {
        "mData": "SensitivePersonalDataDescription",
        "title": "Sensitive Personal Data Categories",
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
        "title": "Is the data item shared with a Third Party outside Dover?",
        "visible": false
    },

    {
        "mData": "ThirdPartyDetails",
        "title": "Third Party Name",
        "visible": false
    },

    {
        "mData": "RecipientsOfTransferredData",
        "title": "Category Of Third Party",
        "visible": false
    },

    {
        "mData": "ModeofTransfer",
        "title": "Mode of Transfer",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "ExistenceofThirdPartyContract",
        "title": "Existence of Third Party Contract?",
        "visible": false
    },

    {
        "mData": "ContractSignatoryfromtheEntity",
        "title": "Contract Signatory From Dover",
        "visible": false
    },

    {
        "mData": "LocationDestinationofTransferred",
        "title": "Location Destination of Transferred Data",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "DataProtectionClauses",
        "title": "Data Protection Clauses",
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
        "mData": "DataTransferredOutsidetheEU",
        "title": "Data Transferred Outside the EU",
       /* "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        }, */
        "visible": false
    },

    {
        "mData": "StandardContractualClauses",
        "title": "Standard Contractual Clauses for transfers outside of the EU",
        "visible": false
    },


    {
        "mData": "SystemsApplications",
        "title": "Systems/Applications/Tools",
        "visible": false
    },

    {
        "mData": "ModeOfStorage",
        "title": "Mode of Storage",
        "render": function (data, type, row) {
            return View_CDI.fn.GetMultiSelectChoiceData(data);
        },
        "visible": false
    },

    {
        "mData": "NetworkDrivePath",
        "title": "Network Drive Path",
        "visible": false
    },

    {
        "mData": "FileServerOwner",
        "title": "Network Drive owner/File server Owner",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },

    {
        "mData": "SharePointOneDrivePath",
        "title": "SharePoint Path",
        "visible": false
    },

    {
        "mData": "OneDrivePath",
        "title": "OneDrive Path",
        "visible": false
    },

    {
        "mData": "Internet",
        "title": "Is the Data item accessible outside Dover Network? ",
        "visible": false
    },

    {
        "mData": "ProcessOfDataRetention",
        "title": "Is there a process for Data Retention/Data Disposal/Data Archival?",
        "visible": false
    },

    {
        "mData": "DataRetentionPeriod",
        "title": "Data Retention Period",
        "visible": false
    },

    {
        "mData": "DataDisposal",
        "title": "Data Disposal",
        "visible": false
    },

    {
        "mData": "ArchivalLocation",
        "title": "Data Archival",
        "visible": false
    },

    {
        "mData": "FormShared",
        "title": "Form Shared",
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
        "mData": "Revalidation_x0020_Status",
        "title": "Revalidation Status",
        "visible": false
    },

    {
        "mData": "RevalidatedBy",
        "title": "Revalidated By",
        "render": function (data, type, row) {
            return View_CDI.fn.GetPeoplePickerData(data);
        },
        "visible": false
    },

    {
        "mData": "Revalidated",
        "title": "Revalidated Date",
        "visible": false
    }


];

View_CDI.vars.DataTable;
View_CDI.vars.filters = [];
$(document).ready(function () {
    setTimeout(
        function () {
            $("#userImage").attr("src", "/_layouts/15/userphoto.aspx?size=M&username=" + InjectScript.vars.currentUserEmail);
            $("#UserName").text("Welcome " + InjectScript.vars.currentUserDisplayName);
        }, 2000);
    View_CDI.fn.getData();
});

View_CDI.fn.getData = function () {
    if (InjectScript.vars.currentUserLevel == "CDI_User") {
        window.location.href = "https://dover.sharepoint.com/sites/CriticalDataInventory-CDICSFProject/SitePages/Welcome.aspx#";
    }
    else if (InjectScript.vars.currentUserLevel == "Site Owner" || InjectScript.vars.currentUserLevel == "CDI_Admin_Team" || InjectScript.vars.currentUserLevel == "CDI_Process_Owners") {
        var query = "?$select=*,ThirdPartyDetails,SystemsApplications,ProcessOwner/EMail,DataReviewer/EMail,DataCustodian/EMail,FileServerOwner/EMail,RevalidatedBy/EMail&$top=5000&$orderby=Created desc&$expand=ProcessOwner,DataReviewer,DataCustodian,FileServerOwner,RevalidatedBy&$filter=FinalSubmissionStatus ne 'Archive'";
    }
    else {
        var query = "?$select=*,ThirdPartyDetails,SystemsApplications,ProcessOwner/EMail,DataReviewer/EMail,DataCustodian/EMail,FileServerOwner/EMail,RevalidatedBy/EMail&$top=5000&$orderby=Created desc&$expand=ProcessOwner,DataReviewer,DataCustodian,FileServerOwner,RevalidatedBy&$filter=OperatingCompany eq '" + InjectScript.vars.UserCorp + "'&$filter=FinalSubmissionStatus ne 'Archive'";
    }

    InjectScript.fn.getListItems(View_CDI.vars.webUrl, View_CDI.vars.CDIList, query, true).done(function (data) {
        View_CDI.vars.CDIData = data;
        View_CDI.vars.CDIData = _.filter(View_CDI.vars.CDIData, function (item) {
            return item.FinalSubmissionStatus != "Archive"
        });
        View_CDI.vars.CDIData = _.map(data, function (val) {
            if (val["ProcessOwner"]["EMail"]) {
                return _.extend({}, val, { ProcessOwnerEMail: val["ProcessOwner"]["EMail"] });
            }
            else {
                return _.extend({}, val, { ProcessOwnerEMail: "" });
            }
        });

        View_CDI.vars.filteredData = View_CDI.vars.CDIData.slice();
        View_CDI.fn.InitiateLoadFunctions();
        View_CDI.fn.buildFilters();
        $('.loader').fadeOut();
    });
}

View_CDI.fn.filterApplied = function (filterValue, field, checked) {
    if (View_CDI.vars.filtersOrder.indexOf(field) < 0 && checked) {
        View_CDI.vars.filtersOrder.push(field);
    }
    else if (!checked && $('[dataitem="' + field + '"]').val().length == 0) {
        View_CDI.vars.filtersOrder = View_CDI.vars.filtersOrder.filter(function (elem) {
            return elem != field;
        });
    }

    if (View_CDI.vars.filtersOrder.length == 0) {
        $("#filterIcon").hide();
    }
    else {
        $("#filterIcon").show();
    }
    View_CDI.fn.applyFilters();
}

View_CDI.fn.applyFilters = function () {
    View_CDI.vars.filteredData = View_CDI.vars.CDIData.slice();
    if (View_CDI.vars.filtersOrder.length > 0) {
        _.each(View_CDI.vars.filtersOrder, function (value, index) {
            var filtersApplied = $("[dataItem='" + value + "']").val();
            View_CDI.vars.filteredData = _.filter(View_CDI.vars.filteredData, function (item) {
                if (item[value] != null) {
                    return filtersApplied.indexOf(item[value].replace(";", "")) > -1;
                }
            });
        });

        _.each($('[multiple="multiple"]'), function (val, ind) {
            if (View_CDI.vars.filtersOrder.indexOf($(val).attr("dataItem")) < 0) {
                View_CDI.fn.SetFilter($(val).attr("dataItem"));
            }
        });
    }
    View_CDI.fn.InitiateLoadFunctions();
}
View_CDI.fn.clearFilters = function () {
    $('[multiple="multiple"]').multiselect('clearSelection');
    View_CDI.vars.filteredData = View_CDI.vars.CDIData.slice();
    View_CDI.vars.filtersOrder = [];
    View_CDI.fn.InitiateLoadFunctions();
    $("#filterIcon").hide();
    View_CDI.fn.buildFilters();
}

View_CDI.fn.SetFilter = function (val) {
    switch (val) {
        case "OperatingCompany":
            View_CDI.fn.buildOpcoFilter();
            break;
        case "SubOperatingCompany":
            View_CDI.fn.buildSubOpcoFilter();
            break;
        case "Location":
            View_CDI.fn.BuildLocationFilter();
            break;
        case "State":
            View_CDI.fn.BuildStateFilter();
            break;
        case "Country":
            View_CDI.fn.BuildCountryFilter();
            break;
        case "BusinessFunction":
            View_CDI.fn.BuildBFFilter();
            break;
        case "ProcessOwnerEMail":
            View_CDI.fn.buildPOFilter();
            break;
        case "PersonalData":
            View_CDI.fn.buildPDFilter();
            break;
    }
}

View_CDI.fn.buildFilters = function () {
    View_CDI.fn.buildOpcoFilter();
    View_CDI.fn.buildSubOpcoFilter();
    View_CDI.fn.BuildBFFilter();
    View_CDI.fn.BuildLocationFilter();
    View_CDI.fn.BuildStateFilter();
    View_CDI.fn.BuildCountryFilter();
    View_CDI.fn.buildPOFilter();
    View_CDI.fn.buildPDFilter();
}

View_CDI.fn.buildPOFilter = function () {
    $("#POSelect").empty();
    $("#POSelect").append(_.map(_.uniq(_.map(View_CDI.vars.filteredData, 'ProcessOwnerEMail')), function (string) {
        if (string) {
            return '<option value="' + string + '">' + string + '</option>'
        }
    }).join(""));
    $('#POSelect').multiselect({
        nonSelectedText: 'Select Process Owner',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "ProcessOwnerEMail", checked);
        }
    });
    $('#POSelect').multiselect('rebuild');
}
View_CDI.fn.buildPDFilter = function () {
    $("#PDSelect").empty();
    $("#PDSelect").append(_.map(_.uniq(_.map(View_CDI.vars.filteredData, 'PersonalData')), function (string) { return '<option value="' + string + '">' + string + '</option>' }).join(""));
    $('#PDSelect').multiselect({
        nonSelectedText: 'Select Personal Data',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "PersonalData", checked);
        }
    });
    $('#PDSelect').multiselect('rebuild');
}

View_CDI.fn.buildOpcoFilter = function () {
    $("#OpCoSelect").empty();
    $("#OpCoSelect").append(_.map(_.uniq(_.map(View_CDI.vars.filteredData, 'OperatingCompany')), function (string) { return '<option value="' + string + '">' + string + '</option>' }).join(""));
    $('#OpCoSelect').multiselect({
        nonSelectedText: 'Select OpCo',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "OperatingCompany", checked);
        }
    });
    $('#OpCoSelect').multiselect('rebuild');
}

View_CDI.fn.buildSubOpcoFilter = function () {
    $("#SubOpCoSelect").empty();
    $("#SubOpCoSelect").append(_.map(_.uniq(_.map(View_CDI.vars.filteredData, 'SubOperatingCompany')), function (string) { return '<option value="' + string + '">' + string + '</option>' }).join(""));
    $('#SubOpCoSelect').multiselect({
        nonSelectedText: 'Select Sub OpCo',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "SubOperatingCompany", checked);
        }
    });
    $('#SubOpCoSelect').multiselect('rebuild');
}

View_CDI.fn.BuildBFFilter = function () {
    $("#BFSelect").empty();
    $("#BFSelect").append(_.map(_.uniq(_.map(View_CDI.vars.filteredData, 'BusinessFunction')), function (string) { return '<option value="' + string + '">' + string + '</option>' }).join(""));
    $('#BFSelect').multiselect({
        nonSelectedText: 'Select Business Function',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "BusinessFunction", checked);
        }
    });
    $('#BFSelect').multiselect('rebuild');
}

View_CDI.fn.BuildLocationFilter = function () {
    $('#LocationSelect').empty();
    var Locations = [];
    _.each(_.map(View_CDI.vars.filteredData, "Location"), function (value) {
        if (value != null) {
            _.each(value.split(";"), function (val) {
                if (val) {
                    if (!_.contains(Locations, val)) {
                        Locations.push(val);
                        $("#LocationSelect").append('<option value="' + val + '">' + val + '</option>');
                    }
                }
            })
        }
    });
    $('#LocationSelect').multiselect({
        nonSelectedText: 'Select Location',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "Location", checked);
        }
    });
    $('#LocationSelect').multiselect('rebuild');
}

View_CDI.fn.BuildStateFilter = function () {
    $('#StateSelect').empty();
    var States = [];
    _.each(_.map(View_CDI.vars.filteredData, "State"), function (value) {
        if (value != null) {
            _.each(value.split(";"), function (val) {
                if (val) {
                    if (!_.contains(States, val)) {
                        States.push(val);
                        $("#StateSelect").append('<option value="' + val + '">' + val + '</option>');
                    }
                }
            })
        }
    });
    $('#StateSelect').multiselect({
        nonSelectedText: 'Select State',
        numberDisplayed: 1,
        maxHeight: 200,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "State", checked);
        }
    });
    $('#StateSelect').multiselect('rebuild');
}

View_CDI.fn.BuildCountryFilter = function () {
    $('#CountrySelect').empty();
    var Country = [];
    _.each(_.map(View_CDI.vars.filteredData, "Country"), function (value) {
        if (value != null) {
            _.each(value.split(";"), function (val) {
                if (val) {
                    if (!_.contains(Country, val)) {
                        Country.push(val);
                        $("#CountrySelect").append('<option value="' + val + '">' + val + '</option>');
                    }
                }
            })
        }
    });
    $('#CountrySelect').multiselect({
        nonSelectedText: 'Select Country',
        numberDisplayed: 1,
        disableIfEmpty: true,
        disabledText: 'No Data Found',
        maxHeight: 200,
        onChange: function (option, checked, select) {
            View_CDI.fn.filterApplied($(option).val(), "Country", checked);
        }
    });
    $('#CountrySelect').multiselect('rebuild');
}

View_CDI.fn.InitiateLoadFunctions = function () {
    if ($.fn.dataTable.isDataTable('#yourCDI')) {
        View_CDI.vars.DataTable.destroy();
    }
    var exportName = new Date().toLocaleDateString() + "Your CDI Export";
    View_CDI.vars.DataTable = $('#yourCDI').DataTable({
        dom: 'lBfrtip',
        "aaData": View_CDI.vars.filteredData,
        buttons: [{
            extend: 'csv',
            title: exportName,
           /* exportOptions: {
                columns: ':visible'
            } */
        },
        {
            extend: 'excel',
            title: exportName,
            /*exportOptions: {
                columns: ':visible'
            } */
        }],
        "aoColumns": View_CDI.vars.ColumnOptions
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